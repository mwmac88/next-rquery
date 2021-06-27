import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { getFixtures } from '@/hooks/useFixtures';
import Fixtures from '@/modules/fixtures/components/Fixtures';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Quid-Bet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Quid-Bet</h1>
      <h2>Quidditch Betting Platform</h2>

      <Fixtures />
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