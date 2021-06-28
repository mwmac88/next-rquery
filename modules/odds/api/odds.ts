import { random } from "lodash";
import { FixtureOdds } from "../types";

const odds: FixtureOdds = {
  301: [
    {
      id: 501,
      name: "Match Odds",
      values: [
        {
          selectionID: 6001,
          value: "Home",
          odd: random(0.5, 4.9),
        },
        {
          selectionID: 6002,
          value: "Draw",
          odd: random(0.5, 4.9),
        },
        {
          selectionID: 6003,
          value: "Away",
          odd: random(0.5, 4.9),
        },
      ],
    },
    {
      id: 502,
      name: "Goals Over/Under",
      values: [
        {
          selectionID: 6003,
          value: "Over 1.5",
          odd: random(0.5, 4.9),
        },
        {
          selectionID: 6004,
          value: "Under 1.5",
          odd: random(0.5, 4.9),
        },
      ],
    },
  ],
};

export default odds;
