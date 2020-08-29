import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  padding: 2rem 10rem;
  margin-top: 2rem;
  color: #fff;
`;

const H3 = styled.h3`
  padding-bottom: 1rem;
`;

const Description = props => {
  return (
    <DescriptionContainer>
        <H3>{props.date}</H3>
        <H3>{props.title}</H3>
        <p>{props.about}</p>
      </DescriptionContainer>
  )
}

export default Description;