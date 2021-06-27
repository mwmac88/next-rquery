import { FixtureID } from "@/common/types";
import { OddWithValues } from "@/modules/odds/types";
import { useQuery } from "react-query";

export const getOdds = async (fixtureID: FixtureID): Promise<OddWithValues> => {
  if (typeof fixtureID === 'undefined') return Promise.reject(new Error('Invalid id'));

  const data = await fetch(
    `http://localhost:3000/api/odds/${fixtureID}`
  );

  if (data.status === 404) {
    throw new Error(data.statusText)
  }

  if (!data.ok) {
    throw new Error('')
  }

  return data.json()
};

export function useOddsQuery(fixtureID: FixtureID) {
  return useQuery<OddWithValues, Error>(['fixtures', fixtureID], () => getOdds(fixtureID), { refetchInterval: 5000, retry: false }); 
}
