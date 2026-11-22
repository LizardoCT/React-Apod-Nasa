import React from 'react'
import { APOD_MIN_DATE } from '../constants/apod'

const ApodDatePicker = ({ value, onChange, max }) => {
  return (
    <input
      id='apod-date'
      className='d-flex justify-content-center m-auto mt-2 text-light font-monospace fst-italic'
      type='date'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      min={APOD_MIN_DATE}
      max={max}
    />
  )
}

export default ApodDatePicker