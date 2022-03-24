import { TeamID } from "@/common/types";

export interface Team {
  id: TeamID;
  name: string;
  county: string;
  country: string;
  league: string;
  logoSrc?: string;
}