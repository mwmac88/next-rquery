import { FixtureID, OddID } from "@/common/types";
import { OddWithValues } from "@/modules/odds/types";
import { useQuery, UseQueryResult } from "react-query";

export const getOdds = async (fixtureID: FixtureID): Promise<OddWithValues[]> => {
  if (typeof fixtureID === 'undefined') return Promise.reject(new Error('Invalid id'));

  const data = await fetch(
    `http://localhost:3000/api/odds/${fixtureID}`
  );

  if (data.status === 404) {
    return Promise.reject(data.statusText)
  }

  if (!data.ok) {
    return Promise.reject(data.statusText)
  }

  return Promise.resolve(data.json())
};

export function useOddsQuery(fixtureID: FixtureID) {
  return useQuery<OddWithValues[], Error>(
    ['fixtures', fixtureID],
    () => getOdds(fixtureID),
    { 
      refetchInterval: 30000,
      retry: false
    }); 
}

export function useOddsByID(fixtureID: FixtureID, oddIDs: OddID[] = [501]) {
  console.log(oddIDs);
  return useQuery<OddWithValues[], Error>(
    ['fixtures', fixtureID], 
    () => getOdds(fixtureID),
    { 
      select: odds => odds.filter(odd => oddIDs?.includes(odd.id)),
      refetchInterval: 5000,
      retry: false 
    }
  ); 
}