// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { random } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  random: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query)
  const randomNum = random(0.5, 10);
  res.status(200).json({ random: randomNum })
}
