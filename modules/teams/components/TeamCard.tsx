import React from "react";
import Image from 'next/image';

import { TeamID } from "@/common/types";
import { useTeam } from "@/hooks/useTeam";

interface Props {
  teamID: TeamID;
}

const TeamCard = ({ teamID }: Props) => {
  const { data, isError } = useTeam(teamID);

  if (data) {
    const { name, logoSrc, league, country, county } = data;
    return (
      <div className="border-2 cursor-pointer hover:bg-gray-200 rounded-md p-2">
        {logoSrc ? <Image src={`/${logoSrc}`} width="80" height="80" alt={data.name} /> : null}
        <h3 className="font-bold text-green-600 text-2xl">
          {name}
        </h3>

        <h4 className="font-semibold mt-4">Team Info</h4>
        <ul>
            <li>League: {league}</li>
            <li>County: {county}</li>
            <li>Country: {country}</li>
        </ul>
      </div>
    );
  }

  if (isError) {
      return <span>Team not found!</span>
  }

  return <span>Loading!</span>;
};

export default TeamCard;
