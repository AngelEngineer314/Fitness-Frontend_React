import React, { useState, useEffect } from "react"
import ServiceType from "./ServiceType"
import ServiceLocation from "./ServiceLocation"

import circleLine from "../../../assets/images/bg/circle-line.png"
import bookingBgPrimary from '../../../assets/images/bg/booking-bg.png'

const bookingCardStyle = {
    backgroundImage:'url(' + bookingBgPrimary + ')',
    width: 834,
}

export default function Service(props) {
    const { onContinueLocation } = props

    const [isContinueType, setIsContinueType] = useState(false)

    const handleContinueType = () => {
        setIsContinueType(true)
    }

    return (
        <section id="service" className="pricing-area p-relative pt-60 pb-60">
            <div className="parolx-text-right">
                {!isContinueType ? "Location" : "Address"}
            </div>
            <div className="container">
                {/* <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-60 text-center">
                            <h2>{!isContinueType ? "Service Type" : "Service Location"}</h2>
                            <img src={circleLine} alt="circle" />
                        </div>
                    </div>
                </div> */}
                <div className="row justify-content-center">
                    <div className="pricing-box text-center mb-60 mt-30" style={bookingCardStyle}>
                        <div className="pricing-head booking-head">                                  
                            <h4>{!isContinueType ? "Service Type" : "Service Location"}</h4>
                        </div>
                        <div className="pricing-body booking-body mt-50 text-center">
                            {!isContinueType ?
                                <ServiceType onContinueType={handleContinueType}/> :
                                <ServiceLocation onContinueLocation={onContinueLocation}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
