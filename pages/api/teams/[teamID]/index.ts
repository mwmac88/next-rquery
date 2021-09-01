import { NextApiRequest, NextApiResponse } from "next";

import { Team } from "@/modules/teams/types";
import teams from '@/modules/teams/data/teams';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Team | Error>
){
	res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
	const { team: teamIDParam } = req.query;
	const teamID = Number(teamIDParam);

  const team = teams.find(team => team.id === teamID);

	if (!team) {
		console.error(`No team for teamID : ${teamID}`)
		return res.status(404).send(new Error(`No odds found for ${teamID}`));
	}

	return res.status(200).json(team)
}