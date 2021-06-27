export type CompetitionID = number;
export type FixtureID = number;
export type TeamID = number;
export type SelectionID = number;

export type FixtureStatus = 'INPLAY' | 'SUSPENDED' | 'POSTPONED' | 'NOTPLAYED';

export interface Team {
  id: TeamID;
  name: string;
  country: string;
  county: string;
  league: string;
  logoSrc?: string;
} 

export type VenueType = 'HOME' | 'AWAY';