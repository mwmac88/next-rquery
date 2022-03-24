import type { NextApiResponse } from 'next'
import teams from '@/modules/teams/data/teams';
import { Team } from '@/modules/teams/types';

export default function handler(
  res: NextApiResponse<Team[]>
) {
  res.status(200).json(teams)
}
