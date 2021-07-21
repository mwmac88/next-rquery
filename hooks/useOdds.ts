import { FixtureID } from "@/common/types";
import { OddsType, OddWithValues } from "@/modules/odds/types";
import { useQuery } from "react-query";

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
    ['odds', fixtureID],
    () => getOdds(fixtureID),
    { 
      refetchInterval: 30000,
      retry: false,
    }); 
}

export function useOddsByType({fixtureID, oddsTypes}: {fixtureID: FixtureID, oddsTypes?: OddsType[]}) {
  return useQuery<OddWithValues[], Error>(
    ['odds', fixtureID], 
    () => getOdds(fixtureID),
    { 
      select: odds => odds.filter(odd => oddsTypes?.includes(odd.type)),
      refetchInterval: 30000,
      retry: false 
    }
  ); 
}