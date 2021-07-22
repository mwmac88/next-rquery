import React, { ReactElement } from "react";
import { useRouter } from 'next/router'

import { useFixtures, usePrefetchFixtures } from "@/hooks/useFixtures";
import OddsView from "@/modules/odds/components/OddsView";

import FixtureCard from "./FixtureCard";
import LoadingCard from "./LoadingCard";
import { useQueryClient } from "react-query";

type Props = {
  limit?: number;
}

const UpcomingFixtures: React.FC<Props> = ({limit}): ReactElement => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data, isLoading, isSuccess } = useFixtures({limit});
  
  usePrefetchFixtures({queryClient, hasMore: data?.hasMore})

  if (isLoading) return <LoadingCard />;

  if (isSuccess && data?.fixtures) {
    const {fixtures} = data;
    return (
      <div className="mt-6">
        <div className="grid grid-cols-2 row-auto gap-4">
          {Object.values(fixtures).map((fixture) => (
            <div
              className='cursor-pointer'
              key={fixture.id}
              onClick={() => router.push({
                pathname: "/fixtures/[fixtureID]",
                query: { fixtureID: fixture.id },
              })}
            >
              <FixtureCard fixture={fixture}>
                <OddsView fixtureID={fixture.id} oddsTypes={['MATCH_ODDS']} />
              </FixtureCard>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <h2>No fixtures found, please try again later</h2>;
};

export default UpcomingFixtures;
