import React, { ReactElement } from "react";
import { useRouter } from 'next/router'

import { useFixtures } from "@/hooks/useFixtures";
import OddsView from "@/modules/odds/components/OddsView";

import FixtureCard from "./FixtureCard";
import LoadingCard from "./LoadingCard";

const Fixtures: React.FC = (): ReactElement => {
  const router = useRouter();
  const { data, isLoading, isSuccess } = useFixtures();

  if (isLoading) return <LoadingCard />;

  if (data && isSuccess)
    return (
      <div className="mt-6">
        <h3 className="font-medium mb-4 text-center">Upcoming Fixtures</h3>

        <div className="grid grid-flow-col gap-4">
          {data.map((fixture) => (
            <div
              className='cursor-pointer'
              key={fixture.id}
              onClick={() => router.push({
                pathname: "/fixtures/[fixtureID]",
                query: { fixtureID: fixture.id },
              })}
            >
              <FixtureCard fixture={fixture}>
                <OddsView fixtureId={fixture.id} />
              </FixtureCard>
            </div>
          ))}
        </div>
      </div>
    );

  return <h2>No fixtures found, please try again later</h2>;
};

export default Fixtures;
