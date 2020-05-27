import React from 'react';
import './footer.css';

const Footer = props => {
  return (
    <footer>
      <p>&copy; Ryan McInnis</p>
  <p>Photo rights to {props.owner}</p>
    </footer>
  )
}

export default Footer;