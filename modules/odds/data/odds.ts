import { getRandomOdd } from "@/common/utils";
import { FixtureOdds } from "../types";

export const odds: FixtureOdds = {
  301: [
    {
      id: 501,
      name: "Match Odds",
      type: 'MATCH_ODDS',
      values: [
        {
          selectionID: 6001,
          value: "Home",
          odd: getRandomOdd(),
        },
        {
          selectionID: 6002,
          value: "Draw",
          odd: getRandomOdd(),
        },
        {
          selectionID: 6003,
          value: "Away",
          odd: getRandomOdd(),
        },
      ],
    },
    {
      id: 502,
      name: "Goals Over/Under",
      type: 'GOALS_OVER_UNDER',
      values: [
        {
          selectionID: 6004,
          value: "Over 1.5",
          odd: getRandomOdd(),
        },
        {
          selectionID: 6005,
          value: "Under 1.5",
          odd: getRandomOdd(),
        },
      ],
    },
  ],
  302: [
    {
      id: 501,
      name: "Match Odds",
      type: 'MATCH_ODDS',
      values: [
        {
          selectionID: 6101,
          value: "Home",
          odd: getRandomOdd(),
        },
        {
          selectionID: 6102,
          value: "Draw",
          odd: getRandomOdd(),
        },
        {
          selectionID: 6103,
          value: "Away",
          odd: getRandomOdd(),
        },
      ],
    },
    {
      id: 502,
      name: "Goals Over/Under",
      type: 'GOALS_OVER_UNDER',
      values: [
        {
          selectionID: 6104,
          value: "Over 1.5",
          odd: getRandomOdd(),
        },
        {
          selectionID: 6105,
          value: "Under 1.5",
          odd: getRandomOdd(),
        },
      ],
    },
  ],
};