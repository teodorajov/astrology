import React, { useState } from 'react';
import { signs } from '../signs';
import SignOverview from './SignOverview';
import Navbar from './Navbar';
export default function OverviewPage() {
  const [expanded, setExpanded] = useState({
    aries: false,
    taurus: false,
    gemini: false,
    cancer: false,
    leo: false,
    virgo: false,
    libra: false,
    scorpio: false,
    sagittarius: false,
    capricorn: false,
    aquarius: false,
    pisces: false
  });
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
