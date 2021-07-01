import React, { ReactElement } from "react";

import { useOddsByID } from "@/hooks/useOdds";
import { FixtureID, OddID } from "@/common/types";
import OddCard from "./OddCard";
import LoadingCard from "./LoadingCard";

interface Props {
  fixtureId: FixtureID;
  oddIDs?: OddID[];
}

const OddsView: React.FC<Props> = ({ fixtureId, oddIDs }): ReactElement => {
  const { data, isLoading, isSuccess } = useOddsByID(fixtureId, oddIDs);

  if (isLoading) <LoadingCard />

  if (data && isSuccess) {
    return (
      <>
        {data.map(odd => <OddCard key={odd.id} odd={odd} />)}
      </>
    );
  }

  return (
    <div className='py-4 text-center'>
      Odds Not Avialable
    </div>
  )
};

export default OddsView;
