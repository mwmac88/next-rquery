import type { NextApiRequest, NextApiResponse } from 'next'
import fixtures from '@/modules/fixtures/data/fixtures';
import { Fixture, FixturesResponse } from '@/modules/fixtures/types';
import { FixtureID } from '@/common/types';

const PAGINATION_LENGTH = 5;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FixturesResponse | Error>
) {
  let hasMore = false;
  let fixturesResponse = fixtures;

  const { page: pageQuery, limit } = req.query;
  const page = Number(pageQuery) || 1;
  const fixturesLength = Object.keys(fixtures).length;
  const limitAmount = Number(limit) || PAGINATION_LENGTH;

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
