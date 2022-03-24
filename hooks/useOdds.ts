import { FixtureID, MarketID } from "@/common/types";
import { MarketType, MarketWithSelections } from "@/modules/odds/types";
import { useQuery } from "react-query";

export const getOdds = async (fixtureID: FixtureID): Promise<MarketWithSelections[]> => {
  if (typeof fixtureID === 'undefined') return Promise.reject(new Error('Invalid id'));
  
  const response = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/odds/${fixtureID}`);

  if (!response.ok) {
    throw new Error("Problem fetching data");
  }

  return await response.json();
};

export function useOddsQuery(fixtureID: FixtureID) {
  return useQuery<MarketWithSelections[], Error>(
    ['odds', fixtureID],
    () => getOdds(fixtureID),
    { 
      refetchInterval: 15000,
    }); 
}

export function useOddsQueryByMarketID(fixtureID: FixtureID, marketID: MarketID) {
  return useQuery<MarketWithSelections[], Error, MarketWithSelections | undefined>(
    ['odds', fixtureID],
    () => getOdds(fixtureID),
    { 
      select: odds => odds.find(odd => odd.marketID === marketID),
      refetchInterval: 15000,
      staleTime: 15000
    }); 
}

export function useOddsByType({fixtureID, marketTypes}: {fixtureID: FixtureID, marketTypes?: MarketType[]}) {
  return useQuery<MarketWithSelections[], Error>(
    ['odds', fixtureID], 
    () => getOdds(fixtureID),
    { 
      select: odds => odds && odds.filter(odd => marketTypes?.includes(odd.marketType)),
      refetchInterval: 15000,
      retry: false
    }
  ); 
}