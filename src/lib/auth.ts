import type { NextApiRequest, NextApiResponse } from 'next'

export const requireAuth = (req: NextApiRequest, res: NextApiResponse) => {
  const authToken = req.body.authToken
  if (!authToken) {
    return res.status(400).end()
  }
  if (authToken !== process.env.API_AUTH_TOKEN) {
    return res.status(401).end()
  }
}
