import type { NextApiRequest, NextApiResponse } from 'next'
import fixtures from '@/modules/fixtures/api/fixtures';
import { Fixture } from '@/modules/fixtures/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Fixture | Error>
) {
  const { fixtureID: fixtureIDParam } = req.query;
	const fixtureID = Number(fixtureIDParam);
  const validFixture = fixtures.find(fixture => fixture.id === fixtureID);

	if (!validFixture) {
		return res.status(404).send(new Error(`No fixture found for ${fixtureID}`));
	}

  res.status(200).json(validFixture)
}
