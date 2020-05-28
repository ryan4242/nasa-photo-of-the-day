import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  background: #2a2d47;
  color: #ffffff;
  height: 10vh;
  box-shadow: 0px 1px 10px 1px rgb(255, 255, 255, 0.7);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Footer = props => {
  return (
    <FooterStyle>
      <p>&copy; Ryan McInnis</p>
      <p>Photo rights to {props.owner}</p>
    </FooterStyle>
  )
}

export default Footer;