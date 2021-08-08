import { FixtureID, MarketID, SelectionID } from "@/common/types";

export type MarketType = 'MATCH_ODDS' | 'GOALS_OVER_UNDER'

export type Selection = {
  selectionID: SelectionID;
  selectionName: string;
  selectionValue: number;
}

export interface MarketWithSelections {
  marketID: MarketID;
  marketName: string;
  marketType: MarketType;
  selections: Selection[];
}

export type FixtureOdds = Record<FixtureID, MarketWithSelections[]>