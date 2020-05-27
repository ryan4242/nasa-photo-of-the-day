import React from 'react';
import './header.css'

const Header = props => {
  return (
    <header className='header'>
      <h1 className='title'>NASA Photo Of The Day</h1>
      <p className='date'>{props.date}</p>
      <form onSubmit={e => {
        e.preventDefault()
        props.changeDate(document.querySelector('#date').value)
        }}>
        <input
          id='date' 
          type='date'
          //value={props.date}
        />
        <input type='submit' value='Change Date!' />
      </form>
    </header>
  )
}

export default Header;