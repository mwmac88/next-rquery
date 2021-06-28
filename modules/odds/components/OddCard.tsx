import React from "react";
import { OddsValue, OddWithValues } from "../types";

interface Props {
  odd: OddWithValues;
}

const OddCard = ({ odd }: Props) => {
  const { id, name, values } = odd;
  return (
    <div className='my-5' key={id}>
      <div className='font-semibold text-center'>{name}</div>

      <div className='grid grid-flow-row md:grid-flow-col'>
      {values.map(({ odd, selectionID, value }: OddsValue) => (
        <div className='grid grid-flow-row text-center' key={selectionID}>
          <div className='font-medium'>{value}</div>
          <div className='bg-blue-700 rounded-sm mx-auto w-16'>
           <span className='text-white'>{Number(odd).toFixed(2)}</span>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default OddCard;
