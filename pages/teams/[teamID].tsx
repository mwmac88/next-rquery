import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { getTeam, useTeam } from '@/hooks/useTeam'

type Context = { params: { teamID: string } };

const Team = () => {
  const router = useRouter();
  const { teamID } = router.query;
  const { data, isError, isSuccess } = useTeam(Number(teamID));

  if (data) {
    const {logoSrc, name} = data;

    return (
      <div>
        Team: {name}
        {logoSrc ? <Image src={`/${logoSrc}`} width="80" height="80" alt={data.name} /> : null}
      </div>
    )
  }

  if (isError || !isSuccess) { 
    return (
      <div>
        No Team Here Sorry!
      </div>
    )
  }

  return (
    <div>
      Loading!
    </div>
  )
}

export async function getServerSideProps(context: Context) {
  const queryClient = new QueryClient()
  const { teamID } = context.params;
  queryClient.prefetchQuery(['team', teamID], () => getTeam(Number(teamID)));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Team
