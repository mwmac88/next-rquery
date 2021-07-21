import { FixturesResponse } from "@/modules/fixtures/types";
import React from "react";
import { QueryClient, useQuery } from "react-query";

type UseFixturesProps = {
  page?: number;
  limit?: number;
}

export const getFixtures = async ({page = 1, limit}: UseFixturesProps): Promise<FixturesResponse> => {
  const baseFixturesEndpoint = `http://localhost:3000/api/fixtures?page=${page}`;
   
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

export function usePrefetchFixtures({page = 1, queryClient, hasMore}: {page: number, queryClient: QueryClient, hasMore?: boolean}) {
  React.useEffect(() => {
    if(hasMore) {
      queryClient.prefetchQuery<FixturesResponse, Error>(['fixtures'], () => getFixtures({page}))
    }
  }, [hasMore, page, queryClient])
}