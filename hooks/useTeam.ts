import { TeamID } from "@/common/types";
import { Team } from "@/modules/teams/types";
import { useQuery } from "react-query";

export const getTeam = async (teamID: TeamID): Promise<Team> => {
  const data = await fetch(`/api/teams/${teamID}`);

  if (!data.ok) {
    return Promise.reject(data.statusText)
  }

  return data.json();
}

export function useTeam(teamID: TeamID) {
  return useQuery<Team, Error>(
    ['team', teamID],
    () => getTeam(teamID),
    { 
      refetchInterval: 10000,
      retry: false,
    });
} 