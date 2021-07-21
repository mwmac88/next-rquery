import { FixtureID } from "@/common/types";
import { Fixture } from "../types";

const fixtures: Record<FixtureID, Fixture> = {
  301: {
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
  302: {
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
  303: {
    id: 303,
    name: "Ballycastle Bats vs Kenmare Kestrels",
    date: "2021-01-01T15:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 202,
        name: 'Ballycastle Bats',
        venueType: "HOME",
      },
      {
        id: 207,
        name: 'Kenmare Kestrels',
        venueType: "AWAY",
      },
    ],
  },
  304: {
    id: 304,
    name: "Chudley Cannons vs Banchory Bangers",
    date: "2021-01-01T17:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 205,
        name: 'Chudley Cannons',
        venueType: "HOME",
      },
      {
        id: 203,
        name: 'Banchory Bangers',
        venueType: "AWAY",
      },
    ],
  },
  305: {
    id: 305,
    name: "Chudley Cannons vs Kenmare Kestrels",
    date: "2021-01-07T12:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 203,
        name: 'Banchory Bangers',
        venueType: "HOME",
      },
      {
        id: 205,
        name: 'Chudley Cannons',
        venueType: "AWAY",
      }
    ],
  },
  306: {
    id: 306,
    name: "Ballycastle Bats vs Appleby Arrows",
    date: "2021-01-07T12:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 202,
        name: 'Ballycastle Bats',
        venueType: "HOME",
      },
      {
        id: 201,
        name: "Appleby Arrows",
        venueType: "AWAY",
      },
    ],
  },
  307: {
    id: 307,
    name: "Montrose Magpies vs Kenmare Kestrels",
    date: "2021-01-07T15:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        name: "Montrose Magpies",
        id: 208,
        venueType: "HOME",
      },
      {
        id: 207,
        name: 'Kenmare Kestrels',
        venueType: "AWAY",
      },
    ],
  },
  308: {
    id: 308,
    name: "Falmouth Falcons vs Chudley Cannons",
    date: "2021-01-07T15:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 206,
        name: 'Falmouth Falcons',
        venueType: "HOME",
      },
      {
        id: 205,
        name: 'Chudley Cannons',
        venueType: "AWAY",
      },
    ],
  },
  309: {
    id: 309,
    name: "Caerphilly Catapults vs Banchory Bangers'",
    date: "2021-01-01T17:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 204,
        name: 'Caerphilly Catapults',
        venueType: "HOME",
      },
      {
        id: 203,
        name: 'Banchory Bangers',
        venueType: "AWAY",
      },
    ],
  },
  310: {
    id: 310,
    name: "Appleby Arrows vs Kenmare Kestrels",
    date: "2021-01-14T12:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 201,
        name: 'Appleby Arrows',
        venueType: "HOME",
      },
      {
        id: 207,
        name: 'Kenmare Kestrels',
        venueType: "AWAY",
      },
    ],
  },
  311: {
    id: 311,
    name: "Caerphilly Catapults vs Chudley Cannons",
    date: "2021-01-14T12:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 204,
        name: 'Caerphilly Catapults',
        venueType: "HOME",
      },
      {
        id: 205,
        name: 'Chudley Cannons',
        venueType: "AWAY",
      }
    ],
  },
  312: {
    id: 312,
    name: "Ballycastle Bats vs Banchory Bangers",
    date: "2021-01-15T12:00:00.000Z",
    status: "NOTPLAYED",
    competitionID: 101,
    inplay: false,
    teams: [
      {
        id: 202,
        name: 'Ballycastle Bats',
        venueType: "HOME",
      },
      {
        id: 203,
        name: 'Banchory Bangers',
        venueType: "AWAY",
      },
    ],
  },
};

export default fixtures;
