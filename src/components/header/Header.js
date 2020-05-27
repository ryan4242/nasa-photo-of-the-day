import React from 'react';
import styles from './header.css'

const Header = props => {
  return (
    <header className='header'>
      <h1 className='title'>NASA Photo Of The Day</h1>
      <p className='date'>{props.date}</p>
    </header>
  )
}

export default Header;