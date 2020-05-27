import React from 'react';
import styles from './header.css'

let date = new Date()

const Header = () => {
  return (
    <header className='header'>
      <h1 className='title'>NASA Photo Of The Day</h1>
      <p className='date'>{new Date().toDateString()}</p>
    </header>
  )
}

export default Header;