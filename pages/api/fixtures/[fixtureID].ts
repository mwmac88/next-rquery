import type { NextApiRequest, NextApiResponse } from 'next'
import fixtures from '@/modules/fixtures/data/fixtures';
import { Fixture } from '@/modules/fixtures/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Fixture | Error>
) {
  const { fixtureID: fixtureIDParam } = req.query;
	const fixtureID = Number(fixtureIDParam);

	if (!fixtures[fixtureID] || isNaN(fixtureID)) {
    console.error(`No fixture for id : ${fixtureID}`)
		return res.status(404).send(new Error(`No fixture found for ${fixtureID}`));
	}

  fixtures[fixtureID].inplay = Math.random() < 0.5;
  
  res.status(200).json(fixtures[fixtureID])
}
