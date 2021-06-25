import { Fixture } from "../types";

const fixtures: Fixture[] = [
  {
    id: 301,
    name: "Fixture 301 - A vs B",
    date: "2021-01-01T12:00:00.000Z",
    status: "NOTPLAYED",
    inplay: false,
    teams: [
      {
        id: 4001,
        name: "Team A",
        venueType: "HOME",
      },
      {
        name: "Team B",
        id: 4002,
        venueType: "AWAY",
      },
    ],
  },
  {
    id: 302,
    name: "Fixture 302 - C vs D",
    date: "2021-01-01T15:00:00.000Z",
    status: "NOTPLAYED",
    inplay: false,
    teams: [
      {
        id: 4003,
        name: "Team C",
        venueType: "HOME",
      },
      {
        id: 4004,
        name: "Team D",
        venueType: "AWAY",
      },
    ],
  },
];

export default fixtures;
