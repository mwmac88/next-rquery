import React, { ReactElement } from "react";
import { useFixtures } from "@/hooks/useFixtures";
import FixtureCard from "./FixtureCard";
import OddsView from "@/modules/odds/components/OddsView";

const Fixtures: React.FC = (): ReactElement => {
  const { data, isLoading, isSuccess } = useFixtures();
  
  if (isLoading) return <div>Loading...</div>

  if (data && isSuccess) return (
    <div className='mt-6'>
      <h3 className='font-medium mb-4 text-center'>Upcoming Fixtures</h3>

      <div className='grid grid-flow-row md:grid-flow-col gap-4'>
      {data.map((fixture) =>
        <FixtureCard key={fixture.id} fixture={fixture}>
          <OddsView fixtureId={fixture.id} />
        </FixtureCard>
      )}
      </div>
      
    </div>
  );

  return <div>No fixtures</div>
}

export default Fixtures;