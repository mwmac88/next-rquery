import { FixtureID, MarketID } from "@/common/types";
import { MarketType, MarketWithSelections } from "@/modules/odds/types";
import { useQuery } from "react-query";

export const getOdds = async (fixtureID: FixtureID): Promise<MarketWithSelections[]> => {
  if (typeof fixtureID === 'undefined') return Promise.reject(new Error('Invalid id'));

  const oddsEndpoint = new URL(`/api/odds/${fixtureID}`, `${process.env.NEXT_PUBLIC_SERVER}`);
  
  const data = await fetch(oddsEndpoint.href);

  if (data.status === 404) {
    return Promise.reject(data.statusText)
  }

  if (!data.ok) {
    return Promise.reject(data.statusText)
  }

  return Promise.resolve(data.json())
};

export function useOddsQuery(fixtureID: FixtureID) {
  return useQuery<MarketWithSelections[], Error>(
    ['odds', fixtureID],
    () => getOdds(fixtureID),
    { 
      refetchInterval: 30000,
      retry: false,
    }); 
}

export function useOddsQueryByMarketID(fixtureID: FixtureID, marketID: MarketID) {
  return useQuery<MarketWithSelections[], Error, MarketWithSelections | undefined>(
    ['odds', fixtureID],
    () => getOdds(fixtureID),
    { 
      select: odds => odds.find(odd => odd.marketID === marketID),
      refetchInterval: 30000,
      retry: false,
    }); 
}

export function useOddsByType({fixtureID, marketTypes}: {fixtureID: FixtureID, marketTypes?: MarketType[]}) {
  return useQuery<MarketWithSelections[], Error>(
    ['odds', fixtureID], 
    () => getOdds(fixtureID),
    { 
      select: odds => odds.filter(odd => marketTypes?.includes(odd.marketType)),
      refetchInterval: 30000,
      retry: false 
    }
  ); 
}