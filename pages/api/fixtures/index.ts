import type { NextApiRequest, NextApiResponse } from 'next'
import fixtures from '@/modules/fixtures/api/fixtures';
import { Fixture } from '@/modules/fixtures/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Fixture[]>
) {
  res.status(200).json(fixtures)
}
