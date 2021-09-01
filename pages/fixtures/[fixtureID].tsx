import React from 'react'
import { useRouter } from 'next/router'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { useFixture } from '@/hooks/useFixture'

const Fixture = () => {
  const router = useRouter();
  const { fixtureID } = router.query;
  const { data, isError, isSuccess} = useFixture(Number(fixtureID));

  if (isError || !isSuccess || !data) { 
    return (
    <div>
      No Fixture Here Sorry!
    </div>
  )
    }

    const { name, date, inplay } = data;

    return ( <div><div>{name} @ {date}</div> { inplay ? <div>Match is in-play!</div> : null}</div>)
}


export async function getServerSideProps() {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Fixture
