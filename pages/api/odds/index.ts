import type { NextApiResponse } from 'next'

export default function handler(
  res: NextApiResponse<string>
) {
  res.status(200).json('welcome to the home of odds')
}
