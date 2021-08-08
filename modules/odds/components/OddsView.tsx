import React, { ReactElement } from "react";

import { useOddsByType } from "@/hooks/useOdds";
import { FixtureID } from "@/common/types";
import OddCard from "./OddCard";
import LoadingCard from "./LoadingCard";
import { MarketType } from "../types";

interface Props {
  fixtureID: FixtureID;
  oddsTypes?: MarketType[];
}

const OddsView: React.FC<Props> = ({ fixtureID, oddsTypes: marketTypes }): ReactElement => {
  const { data, isLoading, isSuccess } = useOddsByType({fixtureID, marketTypes});

  if (isLoading) <LoadingCard />

  if (data && isSuccess) {
    return (
      <>
        {data.map(odd => <OddCard key={odd.marketID} market={odd} fixtureID={fixtureID} />)}
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
