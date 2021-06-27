import React, { ReactElement } from 'react'
import { useOdds } from '@/hooks/useOdds';
import { FixtureID } from '@/common/types';

interface Props {
  fixtureId: FixtureID;
}

const OddsView: React.FC<Props>= ({fixtureId}): ReactElement => {
  const { data, error, isLoading, isSuccess } = useOdds(fixtureId);

  if (error) return <div>Error: {error.message}</div>
  
  if (isLoading) return <div>Loading...</div>

  if (data && isSuccess) {
    const { name, values } = data;
    return (
      <div>
        <span>{name}</span>
        {values.map(({odd, selectionID, value}) => {
          const numToFixed = Number(odd).toFixed(2);
          return (
          <div key={selectionID}>
            <span>{value}: </span>
            <span>{numToFixed}</span>
          </div>
        )})}
      </div>
  )};

  return <div>Odds not currently avialable</div>
}

export default OddsView;
