import { Fixture } from "../types";

const fixtures: Fixture[] = [
  {
    id: 301,
    name: "Appleby Arrows vs Montrose Magpies",
    date: "2021-01-01T12:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 201,
        name: "Appleby Arrows",
        venueType: "HOME",
      },
      {
        name: "Montrose Magpies",
        id: 208,
        venueType: "AWAY",
      },
    ],
  },
  {
    id: 302,
    name: "Caerphilly Catapults vs Falmouth Falcons",
    date: "2021-01-01T15:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 204,
        name: "Caerphilly Catapults",
        venueType: "HOME",
      },
      {
        id: 206,
        name: "Falmouth Falcons",
        venueType: "AWAY",
      },
    ],
  },
];

export default fixtures;
