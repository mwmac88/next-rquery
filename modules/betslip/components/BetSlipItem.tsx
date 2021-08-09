import React, { ReactElement } from 'react'

interface Props {
  fixtureName: string;
  marketName: string;
  selectionName: string;
  selectionValue: number;
  onRemove: () => void;
}

function BetSlipItem({fixtureName, marketName, selectionName, selectionValue, onRemove}: Props): ReactElement {
  return (
    <div className="flex flex-row p-2 bg-green-500">
      <div>
        <div>{fixtureName}</div>
        <div>{marketName}</div>
        <div>{selectionName} @ {Number(selectionValue).toFixed(2)}</div>
      </div>
      <div>
        <span className="cursor-pointer" onClick={() => onRemove()}>X</span>
      </div>
    </div>
  )
}

export default BetSlipItem
