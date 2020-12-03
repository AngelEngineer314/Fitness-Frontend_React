import React, { useState, useEffect } from 'react'

export default function ServiceCard(props) {
    const {serviceIcon, title, serviceLink, description, active} = props;

    return (
        <div className={active ? "s-single-services text-center active" : "s-single-services text-center"} >
            <div className="services-icon">
                <img src={serviceIcon} alt="img" />
            </div>
            <div className="second-services-content">
                <h5><a href="services-detail.html">{title}</a></h5>       
                <p>{description}</p>
            </div>
        </div>
    )
}