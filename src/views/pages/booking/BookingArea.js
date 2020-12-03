import React from 'react'
import { any, string } from 'prop-types'
import BookingTimeTable from './BookingTimeTable'
import '../../../components/react-nice-dates/style.scss';

export default function BookingArea({ children, selectedBookingDate }) {
  return (
    <>
      <div className="col-lg-8 col-md-8 col-sm-8">
        {children}
      </div>
      {selectedBookingDate ? <BookingTimeTable /> : null}
    </>
  )
}

BookingArea.propTypes = {
  children: any
}
