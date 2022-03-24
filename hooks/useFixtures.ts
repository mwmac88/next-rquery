import {  FixturesResponse } from "@/modules/fixtures/types";

import React from "react";
import { QueryClient, useQuery } from "react-query";

type UseFixturesProps = {
  page?: number;
  limit?: number;
};

export const getFixtures = async ({
  page = 1,
  limit,
}: UseFixturesProps): Promise<FixturesResponse> => {
  const fixturesEndpoint = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/fixtures?page=${page}`

  const data = await fetch(
    limit ? `${fixturesEndpoint}&limit=${limit}` : fixturesEndpoint
  );

  if (data.status === 404 || !data.ok) {
    return Promise.reject(data.statusText);
  }

  return data.json();
};

export function useFixtures({ page, limit }: UseFixturesProps) {
  return useQuery<FixturesResponse, Error>(
    ["fixtures"],
    () => getFixtures({ page, limit }),
    { keepPreviousData: true }
  );
}

// export function useFixturesByTeam(teamID: TeamID) {
//   return useQuery<FixturesResponse, Error>(
//     ["fixtures", teamID],
//     () => getFixtures({}),
//     {
//       select: (fixtures) =>
//         Object.values(fixtures).find((fixture: Fixture) => {
//           return some(fixture.teams, teamID)
//         }),
//     }
//   );
// }

// export function usePrefetchFixtures({
//   queryClient,
//   page = 1,
// }: {
//   queryClient: QueryClient;
//   page?: number;
// }) {
//   React.useEffect(() => {
//     queryClient.prefetchQuery<FixturesResponse, Error>(["fixtures"], () =>
//       getFixtures({ page })
//     );
//   }, [page, queryClient]);
// }
