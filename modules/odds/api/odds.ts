import { random } from "lodash";
import { OddWithValues } from "../types";

const odds: OddWithValues[] = [
  {
    fixtureID: 301,
		name: 'Match Odds',
		values: [
			{
        selectionID: 6001,
				value: 'Home',
				odd: random(0.5, 4.9)
			},
			{
        selectionID: 6002,
				value: 'Draw',
				odd: random(0.5, 4.9)
			},
			{
        selectionID: 6003,
				value: 'Away',
				odd: random(0.5, 4.9)
			}
		]
}]

export default odds;