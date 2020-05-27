import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/header/Header';
import MainContent from './components/main/MainContent';
import Footer from './components/footer/Footer'
import "./App.css";

function App() {
  var dt = new Date();

  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState(`${dt.getFullYear()}-${(dt.getMonth() + 1)}-${dt.getDate()}`);

  console.log(date);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(response => {
      setPhoto(response.data)
      console.log(response.data)
    });
  }, [date])

  return (
    <div className="App">
      <Header date={photo.date} changeDate={setDate} />

      <MainContent photo={photo}/>
      <Footer owner={photo.copyright}/>
    </div>
  );
}

export default App;
