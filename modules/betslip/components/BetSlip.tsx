import { FixtureID } from "@/common/types";
import { Fixture, FixturesResponse } from "@/modules/fixtures/types";
import { MarketWithSelections } from "@/modules/odds/types";
import { useAtom } from "jotai";
import React, { ReactElement } from "react";
import { useQueryClient } from "react-query";

import { betSlipReducerAtom } from "../state";
import BetSlipItem from "./BetSlipItem";

interface BetSlipData {
  fixtureName: string;
  marketSelections: MarketWithSelections[];
}

function BetSlip(): ReactElement {
  const queryClient = useQueryClient();
  const [betSlipItems, updateBetSlip] = useAtom(betSlipReducerAtom);

  const betslipData = betSlipItems.reduce((betSlip, item) => {
    const oddsQuery = queryClient.getQueryData<MarketWithSelections[]>([
      "odds",
      item.fixtureID,
    ]);
    const fixturesQuery = queryClient.getQueryData<FixturesResponse>([
      "fixtures",
    ]);

    if (oddsQuery) {
      betSlip[item.fixtureID] = {
        fixtureName: fixturesQuery!.fixtures[item.fixtureID]!.name,
        marketSelections: oddsQuery,
      };
    }
    return betSlip;
  }, {} as Record<FixtureID, BetSlipData>);

  console.log(betslipData);

  return (
    <div className="fixed p-3 bottom-0 w-9/12 flex flex-col bg-blue-300">
      <h2 className="text-center text-xl font-bold font-mono">Bet Slip</h2>
      <div className="flex flex-row flex-wrap">
        {betSlipItems.map((betSlipItem) => {
          const { fixtureID, marketID, selectionID } = betSlipItem;
          const { fixtureName, marketSelections } = betslipData[fixtureID];
          const selections = marketSelections.find(
            (market) => market.marketID === marketID
          );
          const selection = selections?.selections.find(
            (selection) => selection.selectionID === selectionID
          );

          return (
            <div className="flex w-4/12 p-2" key={selectionID}>
              {selection ? (
                <BetSlipItem
                  fixtureName={fixtureName}
                  marketName={selections!.marketName}
                  selectionName={selection.selectionName}
                  selectionValue={selection.selectionValue}
                  onRemove={() => updateBetSlip({type: 'REMOVE', betSlipItem})}
                />
              ) : (
                "No selection"
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BetSlip;
