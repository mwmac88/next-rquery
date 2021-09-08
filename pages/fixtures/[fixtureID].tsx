import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { QueryClient, useQueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getFixture, useFixture } from "@/hooks/useFixture";
import { getTeam } from '@/hooks/useTeam';
import { getOdds } from "@/hooks/useOdds";
import OddsView from "@/modules/odds/components/OddsView";

type Context = { params: { fixtureID: string } }

const Fixture = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { fixtureID } = router.query;
  const { data, isError, isSuccess } = useFixture(Number(fixtureID));

  if (data) {
    const { name, date, inplay, teams } = data;
    return (
      <div>
        <div>
          {name} @ {date}
        </div>
        {inplay ? <div>Match is in-play!</div> : null}

        <OddsView fixtureID={Number(fixtureID)} />
        
        <div>
          Teams:
          {teams.map(({ name, id }) => {
            queryClient.prefetchQuery(['team', id], () => getTeam(id));

            return (<div key={id}>
              <Link href={`/teams/${encodeURIComponent(id)}`}>{name}</Link>
            </div>)
          })}
        </div>
      </div>
    );
  }

  if (isError || !isSuccess) {
    return <div>No Fixture Here Sorry!</div>;
  }

  return <div>Loading</div>;
};

export async function getServerSideProps(context: Context) {
  const queryClient = new QueryClient();
  const { fixtureID } = context.params;
  queryClient.prefetchQuery(['fixtures', fixtureID], () => getFixture(Number(fixtureID)));
  queryClient.prefetchQuery(['odds', fixtureID], () => getOdds(Number(fixtureID)));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Fixture;
