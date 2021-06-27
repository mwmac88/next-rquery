import { NextApiRequest, NextApiResponse } from "next";

import { OddWithValues } from "@/modules/odds/types";

import odds from '@/modules/odds/api/odds';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<OddWithValues | Error>
	) {
	console.log(req.query)
	const { fixtureID: fixtureIDParam } = req.query;
	const fixtureID = Number(fixtureIDParam);
	
	const validOdd = Object.values(odds).find(({fixtureID: fixID}) => fixID === fixtureID)
	
	if (!validOdd) {
		return res.status(404).json(new Error(`No valid Fixture with ID ${fixtureIDParam}`))
	}
		
	return res.status(200).json(validOdd)
}