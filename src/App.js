import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/header/Header';
import MainContent from './components/main/MainContent';
import Footer from './components/footer/Footer'
import "./App.css";

function App() {
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //   .then(response => {
  //     console.log(response)
  //   });
  // }, [])

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
