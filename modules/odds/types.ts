import { FixtureID, SelectionID } from "@/common/types";

export type OddsValue = {
  selectionID: SelectionID;
  value: string;
  odd: number;
}

export interface OddWithValues {
  name: string;
  fixtureID: FixtureID;
  values: OddsValue[];
}