import React, { useState } from 'react';
import { signs } from '../signs';
import SignOverview from './SignOverview';
import Navbar from './Navbar';
export default function OverviewPage() {
  const [expanded, setExpanded] = useState(signs.reduce((acc, element) => {
    acc[element.name] = false;
    return acc;
  }, {}));
  return (

    <>
      <Navbar />
      <div className='container mt-4'>
        <h1 className='text-center mb-4'>Signs overview</h1>
        {
          signs.map(element => {
            return (
              <SignOverview
                sign={element}
                key={element.name}
                expanded={expanded[element.name]}
                onClick={() => {
                  setExpanded(prev => {
                    return {
                      ...prev,
                      [element.name]: !prev[element.name]
                    }
                  })
                }}
              />
            )
          })
        }
      </div>
    </>
  );
}
