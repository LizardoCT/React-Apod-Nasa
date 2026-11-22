import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ApodDatePicker from './components/ApodDatePicker'
import ApodSection from './components/ApodSection'
import { getTodayIso } from './utils/date'

function App() {
  const today = getTodayIso()
  const [inputDate, setInputDate] = useState(today)

  return (
    <div className='App'>
      <Navbar />
      <main>
        <Header />
        <ApodDatePicker value={inputDate} onChange={setInputDate} max={today} />
        <ApodSection date={inputDate} />
      </main>
      <Footer />
    </div>
  )
}

export default App