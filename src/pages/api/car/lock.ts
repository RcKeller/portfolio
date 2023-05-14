// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type {
  VehicleStatus,
  RawVehicleStatus,
} from 'bluelinky/dist/interfaces/common.interfaces'

import { Vehicle } from '../../../lib/bluelink'
import { requireAuth } from '@/lib/auth'

export type StatusResponse = VehicleStatus | RawVehicleStatus

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse>
) {
  requireAuth(req, res)
  const car = await Vehicle()
  try {
    const status = await car.lock()
    if (status !== 'Lock successful') {
      throw Error('Failure')
    }
    console.warn('LOCKED:', status)
    return res.status(200).end()
  } catch (err) {
    return res.status(500).end()
  }
}
