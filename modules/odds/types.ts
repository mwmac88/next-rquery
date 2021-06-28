import { FixtureID, OddID, SelectionID } from "@/common/types";

export type OddsValue = {
  selectionID: SelectionID;
  value: string;
  odd: number;
}

export interface OddWithValues {
  id: OddID;
  name: string;
  values: OddsValue[];
}

export type FixtureOdds = Record<FixtureID, OddWithValues[]>