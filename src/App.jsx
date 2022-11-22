import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from './components/Card'
import Header from "./components/Header";

function App() {

  const [nasa, setNasa] = useState([]);
  const [inputDate, setInputDate] = useState(
    "https://api.nasa.gov/planetary/apod?api_key=n90lOqMPXcN0ndMYCb1XEgJqVZP3AhfcOqmVoI7W"
  );

  useEffect(() => {
    fetch(inputDate)
      .then((response) => response.json())
      .then((result) => {
        setNasa(result);
      });
  }, [inputDate]);

  const datePicker = (e) => {
    setInputDate(
      `https://api.nasa.gov/planetary/apod?api_key=n90lOqMPXcN0ndMYCb1XEgJqVZP3AhfcOqmVoI7W&date=${e.target.value}`
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <input
        className="d-flex justify-content-center m-auto mt-2 text-light"
        type="date"
        onInput={datePicker}
        min="1995-06-16"
        // max="2022-11-18"
        >
      </input>
      <Card
        title={nasa.title}
        media={nasa.media_type}
        url={nasa.url}
        date={nasa.date}
        copyright={nasa.copyright}
        hdurl={nasa.hdurl}
        description={nasa.explanation}
      />
      <Footer />
    </div>
  );
}

export default App;
