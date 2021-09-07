import { NextApiRequest, NextApiResponse } from "next";

import { MarketWithSelections } from "@/modules/odds/types";
import { odds } from '@/modules/odds/data/odds';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<MarketWithSelections[] | Error>
){
	const { fixtureID: fixtureIDParam } = req.query;
	const fixtureID = Number(fixtureIDParam);

	if (!odds[fixtureID]) {
		console.error(`No odds for fixtureID : ${fixtureID}`)
		return res.status(404).send(new Error(`No odds found for ${fixtureID}`));
	}

	return res.status(200).json(odds[fixtureID])
}