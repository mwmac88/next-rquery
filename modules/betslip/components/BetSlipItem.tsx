import React, { ReactElement } from 'react'
import { useOddsQueryByMarketID } from '@/hooks/useOdds'
import { BetSlipItem as BetSlipItemType } from '../types';
import { betSlipReducerAtom } from "../state";
import { useFixture } from '@/hooks/useFixture';
import { useUpdateAtom } from 'jotai/utils';

function BetSlipItem(betSlipItem: BetSlipItemType): ReactElement {
  const { fixtureID, marketID, selectionID } = betSlipItem;
  const updateBetSlip = useUpdateAtom(betSlipReducerAtom);
  const fixtureQueryData = useFixture(fixtureID);
  const oddsQueryData = useOddsQueryByMarketID(fixtureID, marketID);

  const onRemove = () => updateBetSlip({type: 'REMOVE', betSlipItem})
  
  if (fixtureQueryData.error || !fixtureQueryData.isSuccess) {
    return <div>Uh Oh! Something went wrong</div>
  }

  const { data: { name: fixturesName } } = fixtureQueryData;

  if (oddsQueryData.error || !oddsQueryData.isSuccess || !oddsQueryData.data) {
    console.error('Odds missing!')
  }

  const marketName = oddsQueryData.data ? oddsQueryData.data.marketName : null;
  const selection = oddsQueryData.data && oddsQueryData.data.selections.find((selection) => selection.selectionID === selectionID);

  return (
    <div className="flex flex-row p-2 bg-green-500">
      <div>
        <div>{fixturesName}</div>
         <div>{marketName}</div>
        <div>{selection ? `${selection.selectionName} @ ${Number(selection.selectionValue).toFixed(2)}` : null} </div>
      </div>
      <div>
        <span className="cursor-pointer" onClick={() => onRemove()}>X</span>
      </div>
    </div>
  )
}

export default BetSlipItem
