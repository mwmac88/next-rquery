import type { NextApiRequest, NextApiResponse } from 'next'
import fixtures from '@/modules/fixtures/data/fixtures';
import { FixturesResponse } from '@/modules/fixtures/types';

const PAGINATION_LENGTH = 5;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FixturesResponse>
) {
  let hasMore = false;
  let fixturesResponse = fixtures;
  const {page: pageQuery, limit} = req.query;
  const page = Number(pageQuery) || 1;
  const fixturesLength = fixtures.length;
  const limitAmount = Number(limit) || PAGINATION_LENGTH;

  if (fixturesLength > limitAmount) {
    const pageIndex = page - 1;
    const firstIndex = pageIndex * limitAmount;
    const lastIndex = firstIndex + limitAmount;
    fixturesResponse = fixtures.slice(firstIndex, lastIndex);
    hasMore = fixturesLength > firstIndex + limitAmount;
  } 

  res.status(200).json({fixtures: fixturesResponse, hasMore})
}
