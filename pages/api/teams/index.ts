import type { NextApiResponse } from 'next'
import teams from '@/modules/teams/api/teams';
import { Team } from '@/common/types';

export default function handler(
  res: NextApiResponse<Team[]>
) {
  res.status(200).json(teams)
}
