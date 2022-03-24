import React from "react";
import { useIsFetching } from "react-query";
import Image from "next/image";
import { isEqual } from "lodash";
import { useAtom } from "jotai";

import { Selection, MarketWithSelections } from "../types";
import { betSlipReducerAtom } from "@/modules/betslip/state";
import { BetSlipItem } from "@/modules/betslip/types";
import { FixtureID } from "@/common/types";

interface Props {
  market: MarketWithSelections;
  fixtureID: FixtureID;
}

const OddCard = ({ market, fixtureID }: Props) => {
  const isFetching = useIsFetching(['odds', fixtureID]);
  const [betSlipItems, updateBetSlip] = useAtom(betSlipReducerAtom);
  const isInBetSlip = (betSlipItem: BetSlipItem) =>
    betSlipItems.some((item: BetSlipItem) => isEqual(item, betSlipItem));
  const updateBetSlipItems = (betSlipItem: BetSlipItem) => {
    updateBetSlip({
      type: isInBetSlip(betSlipItem) ? "REMOVE" : "ADD",
      betSlipItem,
    });
  };

  const { marketName, marketID, selections } = market;

  return (
    <div className="my-5">
      <div className="font-semibold text-center mb-1">{marketName}</div>

      <div className="grid grid-flow-row md:grid-flow-col">
        {selections.map(
          ({ selectionValue, selectionID, selectionName }: Selection) => (
            <div className="grid grid-flow-row text-center" key={selectionID}>
              <div className="font-medium">{selectionName}</div>
              <button
                onClick={() =>
                  updateBetSlipItems({ fixtureID, marketID, selectionID })
                }
                className={`rounded-sm mx-auto w-16 p-1 ${
                  isFetching ? `disabled` : ``
                } ${
                  isInBetSlip({ fixtureID, marketID, selectionID })
                    ? `bg-green-500 text-white`
                    : `bg-gray-200 text-gray-800`
                }`}
              >
                {isFetching ? (
                  <Image
                    src="/loading.svg"
                    alt="loading spinner"
                    height={30}
                    width={30}
                    className="p-4 text-center"
                  />
                ) : (
                  <span>
                    {Number(selectionValue).toFixed(2)}
                  </span>
                )}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OddCard;
