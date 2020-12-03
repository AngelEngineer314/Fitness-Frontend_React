import React, { useState, useEffect } from "react"

import bookingCheckIcon from '../../../assets/images/bg/booking-check.png'
import bookingUnCheckIcon from '../../../assets/images/bg/booking-uncheck.png'

const resServiceTypeData = [
    {type: 'Home', description: 'Service will be performed at customer residence', isChecked: false,},
    {type: 'Facility', description: 'Office, Gym, Studio, etc', isChecked: false},
    {type: 'Event', description: 'Bootcamps, Contests, Challanges, etc', isChecked: false,},
]

export default function Service(props) {
    const { onContinueType } = props

    const [selectedServiceType, setSelectedServiceType] = useState([])
    const [serviceTypeTemp, setServiceTypeTemp] = useState([])
    const [serviceTypeInit, setServiceTypeInit] = useState([])
    const [serviceTypeData, setServiceTypeData] = useState([])
    

    useEffect(() => {
        setServiceTypeData(resServiceTypeData)
        setServiceTypeTemp(resServiceTypeData)
        setServiceTypeInit(resServiceTypeData)
        return () => {
        }
    }, [resServiceTypeData])

    const handleCheckServiceType = (serviceType, serviceTypeIndex) => () => {
        setServiceTypeTemp(serviceTypeInit);
        setSelectedServiceType(serviceType)

        const updatedServiceType = {
            type: serviceType.type,
            description: serviceType.description,
            isChecked: !serviceType.isChecked
        }
        updateServiceTypeData(updatedServiceType, serviceTypeIndex)
    }

    const updateServiceTypeData = (updatedServiceType, updatedServiceTypeIndex) => {
        const updatedServiceTypeData = [
            ...serviceTypeTemp.slice(0, updatedServiceTypeIndex),
            updatedServiceType,
            ...serviceTypeTemp.slice(updatedServiceTypeIndex + 1)
        ];
        setServiceTypeData(updatedServiceTypeData);
    }

    return (
        <div className="booking-table">
            <div className="table-responsive">
                <table className="table table-borderless booking-time-table text-left">
                    <thead>
                        <tr>
                            <th>SERVICE TYPE</th>
                            <th>DESCRIPTION</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceTypeData.map((serviceType, index) => (
                            <tr key={index}>
                                <td>{serviceType.type}</td>
                                <td>{serviceType.description}</td>
                                <td>
                                    <div 
                                        className="booking-checkbox"
                                        onClick={handleCheckServiceType(serviceType, index)} >
                                        <img 
                                            className="booking-checkbox-icon"
                                            src={serviceType.isChecked ? bookingCheckIcon : bookingUnCheckIcon} />
                                        {!serviceType.isChecked ? 
                                            <div className="booking-checkbox-hover"></div> : null }
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pricing-btn service-type-btn mt-30">
            {selectedServiceType.length !== 0 ?
                <button className="btn" onClick={onContinueType}>Continue</button> : 
                <div className="booking-btn">
                    <a href="#" className="btn disabled">Continue</a>
                </div>
            }
            </div>
        </div>
    )
}
