import { random } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import { OddWithValues } from './types';

const odds: Record<number, Omit<OddWithValues, 'values'>> = {
	5001: {
		fixtureID: 4001,
		name: 'Match Odds'
	}
}

type Data = OddWithValues;

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | Error>
	) {
	console.log(req.query)
	const { fixtureID: fixtureIDParam } = req.query;
	const fixtureID = Number(fixtureIDParam);
	
	const validOdd = Object.values(odds).find(({fixtureID: fixID}) => fixID === fixtureID)
	
	if (!validOdd) {
		return res.status(404).json(new Error(`No valid Fixture with ID ${fixtureIDParam}`))
	}
		
	return res.status(200).json({
		name: validOdd.name,
		fixtureID: validOdd.fixtureID,
		values: [
			{
				value: 'Home',
				odd: random(0.5, 4.9)
			},
			{
				value: 'Draw',
				odd: random(0.5, 4.9)
			},
			{
				value: 'Away',
				odd: random(0.5, 4.9)
			}
		]
	})
}