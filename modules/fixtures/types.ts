import { FixtureStatus, VenueType } from "@/common/types";

export interface Team {
  id: number;
  name: string;
  venueType: VenueType;
}

export interface Fixture {
  id: number;
  name: string;
  date: string;
  status: FixtureStatus;
  inplay: boolean;
  teams: Team[];
}