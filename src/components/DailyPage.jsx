import React, { useState } from 'react';
import { signs } from '../signs';

export default function DailyPage() {
  const [selectedSign, setSelectedSign] = useState(undefined);
  return (
    <div className='container mt-2'>
      <h1 className='text-center mb-4'>Check your daily horoscope</h1>
      <div className='mt-4'>
        <select value={selectedSign} onChange={e => setSelectedSign(e.target.value)} className='form-control'>
          {
            signs.map(element => {
              return (
                <option className='text-capitalize' value={element.name}>{element.name}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  );
}
