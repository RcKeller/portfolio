// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type {
  VehicleStatus,
  RawVehicleStatus,
} from 'bluelinky/dist/interfaces/common.interfaces'

import { Vehicle } from '../../../lib/bluelink'

export type StatusResponse = VehicleStatus | RawVehicleStatus

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse>
) {
  const car = await Vehicle()
  try {
    const status = await car.unlock()
    if (status !== 'Unlock successful') {
      throw Error('Failure')
    }
    console.warn('UNLOCKED:', status)
    return res.status(200).end()
  } catch (err) {
    return res.status(500).end()
  }
}
