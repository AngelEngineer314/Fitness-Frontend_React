import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PricingBox(props) {
    const {title, priceIcon, pricingList, price, priceBg, color, unit} = props;

    const pricingBoxStyle = {
        backgroundImage:'url(' + priceBg + ')',
    }

    return (
        <div className="pricing-box text-center mb-60" style={pricingBoxStyle}>
            <div className="pricing-head">                                  
                <h4>{title}</h4>
                <div className={ color === "primary" ? "icon" : "icon icon-yellow" }>
                    <img src={priceIcon} alt="priceIcon" />
                </div>
            </div>
            <div className="pricing-body mt-80 text-center">
                <ul style={{height: 250}}>
                    {pricingList.map((pricingItem, index) => (
                        <li key={index}>{pricingItem.label}</li>
                    ))}
                </ul>
                    <div className="price-count mt-20 mb-25">
                    <h2>${price} <span> {unit}</span></h2>
                </div>
                <div className="pricing-btn">
                    <a href="#" className="btn">Book Now</a>
                </div>
            </div>
        </div>
    )
}