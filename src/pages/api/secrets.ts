import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const appEnv = process.env.APP_ENV
  if (appEnv) {
    res.status(200).json({ env: appEnv })
  } else {
    res.status(404).json({ error: 'env not available' })
  }
}
