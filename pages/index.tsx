import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { getFixtures } from '@/hooks/useFixtures';

const Home = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['fixtures'], () => getFixtures());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home;