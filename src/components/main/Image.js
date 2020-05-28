import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 95vh;
  padding-bottom: 1rem;
`;

const Image = props => {
  return (
    <ImgContainer>
      <Img src={props.src} alt={props.alt} />
    </ImgContainer>
  )
}

export default Image;