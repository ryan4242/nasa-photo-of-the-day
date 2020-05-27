import React from 'react';

const Description = props => {
  return (
    <div className='description'>
        <h3>{props.title}</h3>
        <p>{props.about}</p>
      </div>
  )
}

export default Description;