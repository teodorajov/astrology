import React from 'react';

export default function SignOverview(props) {
  return (
    <div onClick={props.onClick} className='mt-4 border rounded p-3' style={props.onClick ? { cursor: 'pointer' } : undefined}>
      <h2 className='text-capitalize text-center'>{props.sign.name}</h2>
      <div className='text-center'>
        {props.sign.period}
      </div>
      {
        props.expanded && (
          <p className='mt-4'>
            {props.sign.description}
          </p>
        )
      }
    </div>

  );
}
