import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import AddCardDialog from "../../ui-elements/dialog/AddOrderPaymentMethodDialog"

import circleLine from "../../../assets/images/bg/circle-line.png"
import bookingBgPrimary from '../../../assets/images/bg/booking-bg.png'

const bookingCardStyle = {
    backgroundImage:'url(' + bookingBgPrimary + ')',
    width: 834,
    // height: '100vh',
}

export default function OrderDetails(props) {

    const [isPaymentMethod, setIsPaymentMethod] = useState(false)
    const [openAddCardDialog, setOpenAddCardDialog] = useState(false)
    const [orderData, setOrderData] = useState([])

    const resNewOrderData = useSelector(state => state.checkoutRedux.cardDetail)

    useEffect(() => {
        if (resNewOrderData.length !== 0) {
            setOrderData(resNewOrderData)
            setIsPaymentMethod(true)
            setOpenAddCardDialog(false)
        }
        return () => {
        }
    }, [resNewOrderData])
    
    return (
        <section id="Booking" className="pricing-area p-relative pt-60 pb-60">
            <div className="parolx-text-right">
                Checkout
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-7 pricing-box text-center" style={bookingCardStyle}>
                        <div className="pricing-head booking-head">                                  
                            <h4>Order Details</h4>
                        </div>
                        <div className="pricing-body order-body mt-100 text-left">
                            <div className="order-details">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <label className="order-detail-label">Product</label>
                                        <p className="order-detail-text">Bechmark Package</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label className="order-detail-label">Service Type</label>
                                        <p className="order-detail-text">Facility</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <label className="order-detail-label">Location</label>
                                        <p className="order-detail-text">24 Willie Mays Plz, San Francisco, CA, 94017</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <label className="order-detail-label">Appointment Date</label>
                                        <p className="order-detail-text">Thursday, October 29th</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label className="order-detail-label">Appointment Time</label>
                                        <p className="order-detail-text">10:00 am</p>
                                    </div>
                                </div>    
                            </div>
                            <div className="payment-method">
                                {isPaymentMethod ?
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <label className="order-detail-label">Payment method</label>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <label className="order-detail-label">Card ending in 1840</label>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12">
                                            <div className="pricing-btn">
                                                <button className="btn" onClick={() => {setOpenAddCardDialog(true)}}>Change</button>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="row text-center">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="order-btn">
                                                <button className="btn payment-btn" onClick={() => {setOpenAddCardDialog(true)}}>Add payment method</button>
                                            </div>
                                        </div>
                                    </div> 
                                }
                                <AddCardDialog 
                                    onOpenDialog={openAddCardDialog} 
                                    onCloseDialog={() => {setOpenAddCardDialog(false)}}
                                    />
                            </div>
                            <div className="order-total">
                                <div className="row mb-20">
                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                        <span className="order-total-text">Total due now</span>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <span className="order-total-text">$349.00</span>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        {isPaymentMethod ?
                                            <div className="pricing-btn order-btn">
                                                <button className="btn">Schedule Appointment</button>
                                            </div> :
                                            <div className="order-disable-btn">
                                                <button className="btn disabled">Schedule Appointment</button>
                                            </div>
                                        }
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
