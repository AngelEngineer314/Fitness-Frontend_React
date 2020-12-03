import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import bookingBgPrimary from '../../../assets/images/bg/booking-bg.png'
import bookingCheckIcon from '../../../assets/images/bg/booking-check.png'
import bookingUnCheckIcon from '../../../assets/images/bg/booking-uncheck.png'
import bookingWarningIcon from '../../../assets/images/bg/booking-warning.png'

const resBookingTimeData = [
    {time: '10:00 am', location: 'Clovis', associate: 'Clayton W.', isChecked: false,},
    {time: '11:00 am', location: 'Clovis', associate: 'Clayton W.', isChecked: false,},
    {time: '3:30 am', location: 'Clovis', associate: 'Clayton W.', isChecked: false,},
]

const bookingCardStyle = {
    backgroundImage:'url(' + bookingBgPrimary + ')',
    width: 834,
}

export default function BookingTimeTable(props) {

    const [bookingTimeInit, setBookingTimeInit] = useState([])
    const [bookingTimeTemp, setBookingTimeTemp] = useState([])
    const [bookingTimeData, setBookingTimeData] = useState([])
    const [selectedBooking, setSelectedBooking] = useState([])

    useEffect(() => {
        setBookingTimeInit(resBookingTimeData)
        setBookingTimeTemp(resBookingTimeData)
        setBookingTimeData(resBookingTimeData)
        return () => {
        }
    }, [resBookingTimeData])

    const handleCheckBookingTime = (bookingTime, bookingTimeIndex) => () => {
        setBookingTimeTemp(bookingTimeInit)
        setSelectedBooking(bookingTime)

        const updatedBookingTime = {
            time: bookingTime.time,
            location: bookingTime.location,
            associate: bookingTime.associate,
            isChecked: !bookingTime.isChecked
        }
        updateBookingTimeData(updatedBookingTime, bookingTimeIndex)
    }

    const updateBookingTimeData = (updatedBookingTime, updatedBookingTimeIndex) => {
        const updateBookingTimeData = [
            ...bookingTimeTemp.slice(0, updatedBookingTimeIndex),
            updatedBookingTime,
            ...bookingTimeTemp.slice(updatedBookingTimeIndex + 1)
        ];
        setBookingTimeData(updateBookingTimeData);
    }

    const handleBook = () => {

    }
    
    return (
        <div className="pricing-box text-center mb-60 mt-30" style={bookingCardStyle}>
            <div className="pricing-head booking-head">                                  
                <h4>Book A Time</h4>
            </div>
            <div className="pricing-body booking-body mt-100 text-center">
                {bookingTimeData.length > 0 ?
                    <div className="booking-table">
                        <div className="table-responsive">
                            <table className="table table-borderless booking-time-table text-left">
                                <thead>
                                    <tr>
                                        <th>TIME</th>
                                        <th>LOCATION</th>
                                        <th>ASSOCIATE</th>
                                        <th>BOOK</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookingTimeData.map((bookingTime, index) => (
                                        <tr key={index}>
                                            <td>{bookingTime.time}</td>
                                            <td>{bookingTime.location}</td>
                                            <td>{bookingTime.associate}</td>
                                            <td>
                                                <div 
                                                    className="booking-checkbox"
                                                    onClick={handleCheckBookingTime(bookingTime, index)} >
                                                    <img 
                                                        className="booking-checkbox-icon"
                                                        src={bookingTime.isChecked ? bookingCheckIcon : bookingUnCheckIcon} />
                                                    {!bookingTime.isChecked ? 
                                                        <div className="booking-checkbox-hover"></div> : null }
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {selectedBooking.length !== 0 ?
                            <div className="pricing-btn">
                                <a href="#" className="btn" onClick={handleBook}>Book Now</a>
                            </div> : 
                            <div className="booking-btn">
                                <a href="#" className="btn disabled">Book Now</a>
                            </div>
                        }
                    </div> :
                    <div className="booking-warning">
                        <img src={bookingWarningIcon} alt="warning"/>
                        <h4 className="mt-30">Sorry, no openings found</h4>
                        <p>Try selecting another day</p>
                    </div>
                }
            </div>
        </div>
    );
}