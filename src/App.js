import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/header/Header';
import MainContent from './components/main/MainContent';
import Footer from './components/footer/Footer'
import "./App.css";

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      setPhoto(response.data)
      console.log(response.data)
    });
  }, [])

  return (
    <div className="App">
      <Header date={photo.date}/>
      <MainContent photo={photo}/>
      <Footer owner={photo.copyright}/>
    </div>
  );
}

export default App;
