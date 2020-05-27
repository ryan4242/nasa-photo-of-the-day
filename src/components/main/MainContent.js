import React from 'react';
import Description from './Description';
import Image from './Image';
import './main.css';

const MainContent = ({photo}) => {
  return (
    <main>
      <Description title={photo.title} date={photo.date} about={photo.explanation}/>
      <Image src={photo.url} alt={photo.title}/>
    </main>
  );
}

export default MainContent;