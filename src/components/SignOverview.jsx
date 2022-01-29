import React from 'react';

export default function SignOverview(props) {
  return (
    <div className='mt-4 border rounded p-3'>
      <h2 className='text-capitalize text-center'>{props.sign.name}</h2>
      <div className='text-center'>
        {props.sign.period}
      </div>
      <p className='mt-4'>
        {props.sign.desription}
      </p>
    </div>

  );
}
