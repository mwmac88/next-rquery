import React, { ReactElement } from "react";
import { useFixtures } from "@/hooks/useFixtures";
import FixtureCard from "./FixtureCard";
import OddsView from "@/modules/odds/components/OddsView";

const Fixtures: React.FC = (): ReactElement => {
  const { data, isLoading, isSuccess } = useFixtures();
  
  if (isLoading) return <div>Loading...</div>

  if (data && isSuccess) return (
    <div>
      Upcoming Fixtures:

      {data.map((fixture) => 
        <FixtureCard key={fixture.id} fixture={fixture}>
          <OddsView fixtureId={fixture.id} />
        </FixtureCard>
      )}
      
    </div>
  );

  return <div>No fixtures</div>
}

export default Fixtures;