import { FixtureID } from "@/common/types";

export type OddsValue = {
  value: string;
  odd: number;
}

export interface OddWithValues {
  name: string;
  fixtureID: FixtureID;
  values: OddsValue[];
}