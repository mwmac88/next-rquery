// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { random } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).json('welcome to the home of odds')
}
