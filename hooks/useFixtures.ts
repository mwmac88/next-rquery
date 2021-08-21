import { FixturesResponse } from "@/modules/fixtures/types";
import React from "react";
import { QueryClient, useQuery } from "react-query";

type UseFixturesProps = {
  page?: number;
  limit?: number;
}

export const getFixtures = async ({page = 1, limit}: UseFixturesProps): Promise<FixturesResponse> => {
  const fixturesEndpoint = new URL(`/api/fixtures?page=${page}`, `https://${process.env.NEXT_PUBLIC_SERVER}`);
  const baseFixturesEndpoint = fixturesEndpoint.href;
   
  const data = await fetch(
    limit ? `${baseFixturesEndpoint}&limit=${limit}` : baseFixturesEndpoint
  );

  if (!data.ok) {
    return Promise.reject(data.statusText)
  }

  return data.json()
};

export function useFixtures({page, limit}: UseFixturesProps) {
  return useQuery<FixturesResponse, Error>(['fixtures'], () => getFixtures({page, limit}), { keepPreviousData: true }); 
}

export function usePrefetchFixtures({queryClient, page = 1}: {queryClient: QueryClient, page?: number}) {
  React.useEffect(() => {
      queryClient.prefetchQuery<FixturesResponse, Error>(['fixtures'], () => getFixtures({page}))
  }, [page, queryClient])
}
