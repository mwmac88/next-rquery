import React from "react";
import { useIsFetching } from "react-query";
import Image from 'next/image'

import { OddsValue, OddWithValues } from "../types";

interface Props {
  odd: OddWithValues;
}

const OddCard = ({ odd }: Props) => {
  const isFetching = useIsFetching();
  const { name: oddsType, values } = odd;

  return (
    <div className="my-5">
      <div className="font-semibold text-center mb-1">{oddsType}</div>

      <div className="grid grid-flow-row md:grid-flow-col">
        {values.map(({ odd, selectionID, value }: OddsValue) => (
          <div className="grid grid-flow-row text-center" key={selectionID}>
            <div className="font-medium">{value}</div>
            <button className={`bg-blue-700 rounded-sm mx-auto w-16 ${isFetching ? `disabled` : ``} `}>
              {isFetching ? (
                <Image
                  src="/loading.svg"
                  alt="loading spinner"
                  height={30}
                  width={30}
                  className='p-4 text-center'
                />
              ) : (
                <span className="text-white">{Number(odd).toFixed(2)}</span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OddCard;
