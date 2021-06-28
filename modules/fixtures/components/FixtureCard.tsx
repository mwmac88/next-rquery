import React, { ReactElement } from 'react'
import { format } from 'date-fns';
import { Fixture } from '../types';

interface Props {
  fixture: Fixture;
  children?: React.ReactNode;
}

const FixtureCard: React.FC<Props> = ({fixture, children}): ReactElement => {
  const { name, date, status, inplay, teams } = fixture;
  const formattedDate = format(new Date(date), 'do-MMM-yyyy @ kk:mm');
  return (
    <div className='border border-solid border-gray-200 rounded-md drop-shadow shadow p-4'>
      <h3 className='font-medium text-center text-lg'>{name}</h3>
      <div className='text-center text-indigo-500 font-medium mb-4'>{formattedDate}</div>
      <div className='grid grid-rows-2 divide-y-2 md:grid-cols-2 md:divide-x-2 md:divide-y-0 md:grid-rows-none divide-gray-400 w-1/2 md:w-auto mx-auto'>
        {teams.map((team) => (
          <div className='text-center' key={team.id}>
            <div className='mb-1 font-medium'>{team.venueType}</div> 
            <div>{team.name}</div>
          </div>
          ))}
      </div>
      {children}
    </div>
  )
}

export default FixtureCard;
