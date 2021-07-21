import React, { ReactElement } from "react";

import { useOddsByType, useOddsQuery } from "@/hooks/useOdds";
import { FixtureID } from "@/common/types";
import OddCard from "./OddCard";
import LoadingCard from "./LoadingCard";
import { OddsType } from "../types";

interface Props {
  fixtureID: FixtureID;
  oddsTypes?: OddsType[];
}

const OddsView: React.FC<Props> = ({ fixtureID, oddsTypes }): ReactElement => {
  const { data, isLoading, isSuccess } = useOddsByType({fixtureID, oddsTypes});

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
