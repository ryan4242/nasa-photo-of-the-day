import React from 'react';
import styles from './footer.css';

const Footer = props => {
  return (
    <footer>
      <p>&copy; Ryan McInnis</p>
  <p>Photo rights to {props.owner}</p>
    </footer>
  )
}

export default Footer;