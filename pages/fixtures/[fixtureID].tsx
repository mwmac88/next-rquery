import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { useFixture } from "@/hooks/useFixture";

const Fixture = () => {
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

        <div>
          Teams:
          {teams.map(({ name, id }) => (
            <div key={id}>
              <Link href={`/teams/${encodeURIComponent(id)}`}>{name}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError || !isSuccess) {
    return <div>No Fixture Here Sorry!</div>;
  }

  return <div>Loading</div>;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Fixture;
