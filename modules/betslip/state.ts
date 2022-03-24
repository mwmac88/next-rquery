import { isEqual, unionWith } from 'lodash';
import { atomWithReducer } from 'jotai/utils';
import { BetSlipItem } from './types';

const betSlipReducer = (prev: BetSlipItem[], action: { type: "ADD" | "REMOVE", betSlipItem: BetSlipItem }) => {
  if (action.type === "ADD") {
    return unionWith([...prev, action.betSlipItem], isEqual)
  } else if (action.type === "REMOVE") {
    return prev.filter((betSlipItem) => !isEqual(betSlipItem, action.betSlipItem));
  } else {
    throw new Error("unknown action type");
  }
};

const betSlipReducerAtom = atomWithReducer([], betSlipReducer);

export {
  betSlipReducerAtom
}