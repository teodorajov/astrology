import React from 'react';
import { signs } from '../signs';
import SignOverview from './SignOverview';

export default function OverviewPage() {
  return (
    <div className='container mt-4'>
      {
        signs.map(element => {
          return (
            <SignOverview sign={element} key={element.name} />
          )
        })
      }
    </div>
  );
}
