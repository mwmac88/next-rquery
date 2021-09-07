import { NextApiRequest, NextApiResponse } from "next";

import { Team } from "@/modules/teams/types";
import teams from '@/modules/teams/data/teams';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Team | Error>
){
	const { teamID: teamIDParam } = req.query;
	const teamID = Number(teamIDParam);

	if (isNaN(teamID)) {
		console.error('Invalid team number!')
		return res.status(404).send(new Error(`Invalid team number provided`));
	}

  const team = teams.find(team => team.id === teamID);

	if (!team) {
		console.error(`No team for teamID : ${teamID}`)
		return res.status(404).send(new Error(`No team found for ${teamID}`));
	}

	return res.status(200).json(team)
}