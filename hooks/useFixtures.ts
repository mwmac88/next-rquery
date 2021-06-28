import { Fixture } from "@/modules/fixtures/types";
import { useQuery } from "react-query";

export const getFixtures = async (): Promise<Fixture[]> => {
  const data = await fetch(
    'http://localhost:3000/api/fixtures'
  );

  if (!data.ok) {
    return Promise.reject(data.statusText)
  }

  return data.json()
};

export function useFixtures() {
  return useQuery<Fixture[], Error>(['fixtures'], () => getFixtures()); 
}
