import React from 'react'
import { useRouter } from 'next/router'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

// import { useFixturesByTeamID } from '@/hooks/useFixtures'
import teams from '@/modules/teams/data/teams';
import { useTeam } from '@/hooks/useTeam'

const Team = () => {
  const router = useRouter();
  const { teamID } = router.query;
  const teamData = useTeam(Number(teamID));
  // const fixturesData = useFixturesByTeamID(Number(fixtureID));

  if (teamData.isError || !teamData.isSuccess || !teamData) { 
    return (
        <div>
          No Team Here Sorry!
        </div>
      )
    }

    return (
      <div>
        Team stuff goes here!
      </div>
    )
    // FixtureCard here
}

export async function getStaticPaths() {
  const teamIDs = Object.values(teams);
  return {
    paths: teamIDs.map(team => { return { params: { teamID: team.id } }}),
    fallback: false
  }
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Team
