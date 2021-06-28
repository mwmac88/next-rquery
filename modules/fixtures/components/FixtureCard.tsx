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
    <div>
      <h3>{name}</h3>
      <span>{formattedDate}</span>
      <div>
        {teams.map((team) => (
          <div key={team.id}>
            {`${team.venueType}: ${team.name}`}
          </div>
          ))}
      </div>
      {children}
    </div>
  )
}

export default FixtureCard;
