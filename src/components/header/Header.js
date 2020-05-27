import React from 'react';
import './header.css'

const Header = props => {
  return (
    <header className='header'>
      <h1 className='title'>NASA Photo Of The Day</h1>
      <p className='date'>{props.date}</p>
      <button onClick={() => {props.changeDate('2012-03-14')}}>Change Date</button>
    </header>
  )
}

export default Header;