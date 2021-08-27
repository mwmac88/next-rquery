import type { NextApiRequest, NextApiResponse } from 'next'
import fixtures from '@/modules/fixtures/data/fixtures';
import { Fixture, FixturesResponse } from '@/modules/fixtures/types';
import { FixtureID } from '@/common/types';
import { filter } from 'lodash';

const PAGINATION_LENGTH = 5;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FixturesResponse | Error>
) {
  let hasMore = false;
  let fixturesResponse = fixtures;

  const { page: pageQuery, limit, teamID: teamIDParam } = req.query;
  const teamID = Number(teamIDParam);
  const page = Number(pageQuery) || 1;
  const fixturesLength = Object.keys(fixtures).length;
  const limitAmount = Number(limit) || PAGINATION_LENGTH;

  if (teamIDParam) {
    if (isNaN(teamID)) {
      console.error(`No fixture for id : ${teamID}`)
      return res.status(404).send(new Error(`No fixture found for ${teamID}`));
    }
    fixturesResponse = filter(fixtures, (fixture) => fixture.teams.includes((team: Team) => team.id === teamID));
  }

  if (isNaN(teamID)) {
    console.error(`No fixture for id : ${teamID}`)
		return res.status(404).send(new Error(`No fixture found for ${teamID}`));
	}

  if (fixturesLength > limitAmount) {
    const pageIndex = page - 1;
    const firstIndex = pageIndex * limitAmount;
    const lastIndex = firstIndex + limitAmount;
    fixturesResponse = Object.entries(fixtures).slice(firstIndex, lastIndex).reduce<Record<FixtureID, Fixture>>((acc, [key, fixture]) => { 
      acc[Number(key)] = fixture;
      return acc;
    }, {});
    hasMore = fixturesLength > firstIndex + limitAmount;
  }

  res.status(200).json({fixtures: fixturesResponse, hasMore})
}
