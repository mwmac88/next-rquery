import { atom } from 'jotai';
import { BetSlipItem } from './types';

const betSlipItemsAtom = atom<BetSlipItem[]>([])

export {
  betSlipItemsAtom
}