import React, { ReactElement } from 'react'

interface Props {
  fixtureName: string;
  marketName: string;
  selectionName: string;
  selectionValue: number;
}

function BetSlipItem({fixtureName, marketName, selectionName, selectionValue}: Props): ReactElement {
  return (
    <div>
      <div>{fixtureName}</div>
      <div>{marketName}</div>
      <div>{selectionName} @ {Number(selectionValue).toFixed(2)}</div>
    </div>
  )
}

export default BetSlipItem
