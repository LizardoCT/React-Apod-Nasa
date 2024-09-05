import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  const today = new Date().toISOString().split('T')[0]
  const [nasa, setNasa] = useState([])
  const [inputDate, setInputDate] = useState(today)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=n90lOqMPXcN0ndMYCb1XEgJqVZP3AhfcOqmVoI7W&date=${inputDate}`
    )
      .then((response) => response.json())
      .then((result) => {
        setNasa(result)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        console.log('error')
      })
  }, [inputDate])

  const datePicker = (e) => {
    setInputDate(e.target.value)
  }

  const formatDate = (dateString) => {
    if (!dateString) return '' // verifica si dateString es undefined o null

    const [year, month, day] = dateString.split('-')
    return `${day}/${month}/${year}`
  }

  return (
    <div className='App'>
      <Navbar />
      <main>
        <Header />
        <input
          className='d-flex justify-content-center m-auto mt-2 text-light font-monospace fst-italic'
          type='date'
          value={inputDate}
          onChange={datePicker}
          min='1995-06-16'
          max={today}
        ></input>
        <Card
          title={nasa.title}
          media={nasa.media_type}
          url={nasa.url}
          date={formatDate(nasa.date)}
          copyright={nasa.copyright}
          hdurl={nasa.hdurl}
          description={nasa.explanation}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
