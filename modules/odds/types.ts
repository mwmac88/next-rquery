import { FixtureID, OddID, SelectionID } from "@/common/types";

export type OddsType = 'MATCH_ODDS' | 'GOALS_OVER_UNDER'

export type OddsValue = {
  selectionID: SelectionID;
  value: string;
  odd: number;
}

export interface OddWithValues {
  id: OddID;
  name: string;
  type: OddsType;
  values: OddsValue[];
}

export type FixtureOdds = Record<FixtureID, OddWithValues[]>