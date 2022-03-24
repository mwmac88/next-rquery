import React, { ReactElement } from "react";
import OddsView from "@/modules/odds/components/OddsView";

import FixtureCard from "./FixtureCard";
import { Fixture } from "../types";
import { FixtureID } from "@/common/types";

type Props = {
  fixtures: Record<FixtureID, Fixture>;
}

const UpcomingFixtures: React.FC<Props> = ({fixtures}): ReactElement => (
      <div className="mt-6">
        <div className="grid grid-cols-2 row-auto gap-4">
          {Object.values(fixtures).map((fixture) => (
            <div
              key={fixture.id}
            >
              <FixtureCard fixture={fixture}>
                <OddsView fixtureID={fixture.id} marketTypes={['MATCH_ODDS']} />
              </FixtureCard>
            </div>
          ))}
        </div>
      </div>
    );

export default UpcomingFixtures;
