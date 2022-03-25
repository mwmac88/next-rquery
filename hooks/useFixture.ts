import { FixtureID } from "@/common/types";
import { Fixture } from "@/modules/fixtures/types";
import { useQuery } from "react-query";

export const getFixture = async (fixtureID: FixtureID): Promise<Fixture> => {
  const fixtureAPI = new URL(`/api/fixtures/${fixtureID}`, process.env.NEXT_PUBLIC_SERVER);
  const data = await fetch(fixtureAPI.toString());

  if (data.status === 404 || !data.ok) {
    return Promise.reject(data.statusText);
  }

  return data.json();
};

export function useFixture(fixtureID: FixtureID) {
  return useQuery<Fixture, Error>(["fixtures", fixtureID], () =>
    getFixture(fixtureID)
  );
}
