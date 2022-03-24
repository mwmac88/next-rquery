import React from "react";
import { format } from "date-fns";
import Head from "next/head";
import { useRouter } from "next/router";
import { QueryClient, useQueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getFixture, useFixture } from "@/hooks/useFixture";
import { getTeam } from "@/hooks/useTeam";
import { getOdds } from "@/hooks/useOdds";
import OddsView from "@/modules/odds/components/OddsView";
import BetSlip from "@/modules/betslip/components/BetSlip";
import TeamCard from "@/modules/teams/components/TeamCard";
import LoadingCard from "@/modules/odds/components/LoadingCard";

type Context = { params: { fixtureID: string } };

const Fixture = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { fixtureID } = router.query;
  const { data, isError, isSuccess } = useFixture(Number(fixtureID));

  if (data) {
    const { name, date, inplay, teams } = data;
    return (
      <>
        <Head>
          <title>Quid-Bet Fixture</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <div className="container mx-auto px-4 text-center">
          <BetSlip />

          <h2 className="font-medium text-2xl">
            {name} @ {format(new Date(date), "do-MMM-yyyy @ kk:mm")}
          </h2>

          {inplay ? (
            <div className="m-4 uppercase font-bold text-red-600">
              Match is in-play!
            </div>
          ) : null}

          <div className="my-4 mx-auto w-3/4">
            <h3 className="font-medium text-lg mb-2">Teams</h3>
            <div className="flex flex-1">
              {teams.map((team) => {
                queryClient.prefetchQuery(["team", team.id], () =>
                  getTeam(team.id)
                );

                return (
                  <div className="w-1/2 mx-2.5" key={team.id}  onClick={() => router.push(`/teams/${team.id}`)}>
                    <TeamCard teamID={team.id} />
                  </div>
                );
              })}
            </div>

           
          </div>

          <div className="border-2 w-1/3 mx-auto">
              <OddsView
                fixtureID={Number(fixtureID)}
                marketTypes={["MATCH_ODDS", "GOALS_OVER_UNDER"]}
              />
            </div>
        </div>
      </>
    );
  }

  if (isError) {
    return <div>No Fixture Here Sorry!</div>;
  }

  return <div><LoadingCard /></div>;
};

export async function getServerSideProps(context: Context) {
  const queryClient = new QueryClient();
  const { fixtureID } = context.params;
  queryClient.prefetchQuery(["fixtures", fixtureID], () =>
    getFixture(Number(fixtureID))
  );
  queryClient.prefetchQuery(["odds", fixtureID], () =>
    getOdds(Number(fixtureID))
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Fixture;
