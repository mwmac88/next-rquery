import { NextApiRequest, NextApiResponse } from "next";

import { OddWithValues } from "@/modules/odds/types";

import { odds } from '@/modules/odds/data/odds';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<OddWithValues[] | Error>
){
	res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
	const { fixtureID: fixtureIDParam } = req.query;
	const fixtureID = Number(fixtureIDParam);

	if (!odds[fixtureID]) {
		return res.status(404).send(new Error(`No odds found for ${fixtureID}`));
	}
	return res.status(200).json(odds[fixtureID])
}