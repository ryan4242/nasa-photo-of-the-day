import React from 'react';

const Image = props => {
  return (
    <div className='img-container'>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default Image;