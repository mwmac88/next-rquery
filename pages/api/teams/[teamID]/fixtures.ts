import fixtures from "@/modules/fixtures/data/fixtures";
import { Fixture } from "@/modules/fixtures/types";
import { filter, find } from 'lodash';
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Fixture[]>
  ) {
    const { teamID: teamIDParam } = req.query;
    const teamID =  Number(teamIDParam);

    if (!teamIDParam || isNaN(teamID)) {
        return new Error('This is not a valid team ID');
    }

    const teamFixtures = filter(fixtures, (fixture) => Boolean(find(fixture.teams, (team) => team.id === teamID)))

    res.status(200).json(teamFixtures);
}