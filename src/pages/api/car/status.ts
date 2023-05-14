// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type {
  VehicleStatus,
  RawVehicleStatus,
} from 'bluelinky/dist/interfaces/common.interfaces'

import { requireAuth } from '@/lib/auth'
import { Vehicle } from '../../../lib/bluelink'

export type StatusResponse = VehicleStatus | RawVehicleStatus

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse>
) {
  requireAuth(req, res)
  const car = await Vehicle()
  const status = await car.status({ refresh: false, parsed: true })
  if (status === null) {
    return res.status(500).end()
  }
  return res.status(200).json(status)
}
