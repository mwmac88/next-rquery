import { useAtom } from "jotai";
import React, { ReactElement } from "react";


import { betSlipReducerAtom } from "../state";
import BetSlipItem from "./BetSlipItem";

function BetSlip(): ReactElement {
  const [betSlipItems] = useAtom(betSlipReducerAtom);

  return (
    <div className="sticky p-3 mb-3 mx-auto top-0 max-h-60 w-9/12 flex flex-col bg-blue-300 overflow-y-auto overscroll-contain">
      <h2 className="text-center text-xl font-bold font-mono">Bet Slip</h2>
      <div className="flex flex-row flex-wrap">
        {betSlipItems.map((betSlipItem) => {
          return (
            <div className="flex w-4/12 p-2" key={betSlipItem.selectionID}>
                <BetSlipItem {...betSlipItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BetSlip;
