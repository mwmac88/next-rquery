import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

import { getFixtures } from '@/hooks/useFixtures';
import Fixtures from '@/modules/fixtures/components/Fixtures';

const Home = () => {
  return (
    <div className='container mx-auto px-4'>
      <Head>
        <title>Quid-Bet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <h1 className="text-3xl font-mono font-bold uppercase text-center">Quid-Bet</h1>
      <h2 className="text-md font-medium italic uppercase text-center">The Only Quidditch Betting Platform</h2>

      <section>
        <h3 className="font-medium mb-4 text-center">Upcoming Fixtures</h3>
        <Fixtures limit={2} />
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['fixtures'], () => getFixtures({page: 1}));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home;