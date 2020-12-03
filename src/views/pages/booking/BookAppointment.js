import React, { useState } from "react"
import { format } from "date-fns"
import { enGB } from "date-fns/locale"
import DatePickerCalendar from "../../../components/react-nice-dates/DatePickerCalendar"
import BookingArea from "./BookingArea"
import BookingTimeTable from './BookingTimeTable'

import circleLine from "../../../assets/images/bg/circle-line.png"

export default function BookAppointment() {
  const [bookingDate, setBookingDate] = useState()

  return (
    <section id="Booking" className="pricing-area p-relative pt-30 pb-60">
      <div className="parolx-text-right" style={{ right: -160 }}>
        Appointments
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title center-align mb-30 text-center">
              <h2>Book Appointment</h2>
              <img src={circleLine} alt="circle" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <BookingTimeTable /> */}
          <BookingArea selectedBookingDate={bookingDate}>
            <DatePickerCalendar date={bookingDate} onDateChange={setBookingDate} locale={enGB} />
          </BookingArea>
        </div>
      </div>
    </section>
  )
}
