import React from 'react';
import Description from './Description';
import Image from './Image';
import styled from 'styled-components';

const Main = styled.main`
  box-shadow: 0px 1px 10px 1px rgb(255, 255, 255, 0.7);
  background: #2a2d47;
`;

const MainContent = ({photo}) => {
  return (
    <Main>
      <Description title={photo.title} date={photo.date} about={photo.explanation}/>
      <Image src={photo.url} alt={photo.title}/>
    </Main>
  );
}

export default MainContent;