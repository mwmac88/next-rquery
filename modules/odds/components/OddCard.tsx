import React from "react";
import { OddsValue, OddWithValues } from "../types";

interface Props {
  odd: OddWithValues;
}

const OddCard = ({ odd }: Props) => {
  const { id, name, values } = odd;
  return (
    <div key={id}>
      <strong>{name}</strong>
      {values.map(({ odd, selectionID, value }: OddsValue) => (
        <div key={selectionID}>
          <span>
            {value}: {Number(odd).toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OddCard;
