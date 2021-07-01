import React from 'react'
import { useRouter } from 'next/router'

import { useFixture } from '@/hooks/useFixture'

const Fixture = () => {
  const router = useRouter()
  const { fixtureID } = router.query

  console.log(fixtureID);
  
  const { data } = useFixture(Number(fixtureID));
  
  if (data) {
    const { name,  } = data;

    return (<div>{name}</div>)
  }

  return (
    <div>
      
    </div>
  )
}

export default Fixture
