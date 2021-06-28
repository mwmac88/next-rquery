import React, { ReactElement } from "react";
import { useOddsByID } from "@/hooks/useOdds";
import { FixtureID, OddID } from "@/common/types";
import OddCard from "./OddCard";

interface Props {
  fixtureId: FixtureID;
  oddIDs?: OddID[];
}

const OddsView: React.FC<Props> = ({ fixtureId, oddIDs }): ReactElement => {
  const { data, isLoading, isSuccess } = useOddsByID(fixtureId, oddIDs);

  if (isLoading) return <div>Loading...</div>;

  if (data && isSuccess) {
    return (
      <div>
        {data.map((odd) => <OddCard key={odd.id} odd={odd} />)}
      </div>
    );
  }

  return <div>Odds not currently avialable</div>;
};

export default OddsView;
