import { getRandomOdd } from "@/common/utils";
import { FixtureOdds } from "../types";

export const odds: FixtureOdds = {
  301: [
    {
      marketID: 501,
      marketName: "Match Odds",
      marketType: 'MATCH_ODDS',
      selections: [
        {
          selectionID: 6001,
          selectionName: "Home",
          selectionValue: getRandomOdd(),
        },
        {
          selectionID: 6002,
          selectionName: "Draw",
          selectionValue: getRandomOdd(),
        },
        {
          selectionID: 6003,
          selectionName: "Away",
          selectionValue: getRandomOdd(),
        },
      ],
    },
    {
      marketID: 502,
      marketName: "Goals Over/Under",
      marketType: 'GOALS_OVER_UNDER',
      selections: [
        {
          selectionID: 6004,
          selectionName: "Over 1.5",
          selectionValue: getRandomOdd(),
        },
        {
          selectionID: 6005,
          selectionName: "Under 1.5",
          selectionValue: getRandomOdd(),
        },
      ],
    },
  ],
  302: [
    {
      marketID: 501,
      marketName: "Match Odds",
      marketType: 'MATCH_ODDS',
      selections: [
        {
          selectionID: 6101,
          selectionName: "Home",
          selectionValue: getRandomOdd(),
        },
        {
          selectionID: 6102,
          selectionName: "Draw",
          selectionValue: getRandomOdd(),
        },
        {
          selectionID: 6103,
          selectionName: "Away",
          selectionValue: getRandomOdd(),
        },
      ],
    },
    {
      marketID: 502,
      marketName: "Goals Over/Under",
      marketType: 'GOALS_OVER_UNDER',
      selections: [
        {
          selectionID: 6104,
          selectionName: "Over 1.5",
          selectionValue: getRandomOdd(),
        },
        {
          selectionID: 6105,
          selectionName: "Under 1.5",
          selectionValue: getRandomOdd(),
        },
      ],
    },
  ],
};