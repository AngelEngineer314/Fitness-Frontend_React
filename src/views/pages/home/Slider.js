import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'

import headerObject from '../../../assets/images/bg/header-object.png'
import headerImg from '../../../assets/images/bg/header-img.png'
import headerBg from '../../../assets/images/bg/header-bg.png'
import adIcon1 from '../../../assets/images/bg/ad-icon1.png'
import adIcon2 from '../../../assets/images/bg/ad-icon2.png'
import adIcon3 from '../../../assets/images/bg/ad-icon3.png'

const cities = [
    { value: 'fresno', label: 'Fresno' },
    { value: 'clovis', label: 'Clovis' },
    { value: 'sanger', label: 'Sanger' },
    { value: 'madera', label: 'Madera' },
    { value: 'fowler', label: 'Fowler' },
]

const serviceTypes = [
    { value: 'atHome', label: 'At Home' },
    { value: 'atLocation', label: 'At Location' },
    { value: 'event', label: 'Event' },
]

const services = [
    { value: '3D_Body_Scan', label: '3D Body Scan' },
    { value: 'RMR_Testing', label: 'RMR Testing' },
    { value: 'VO2_Max_Testing', label: 'VO2 Max Testing' },
    { value: 'Full_Metabolic_Analysis', label: 'Full Metabolic Analysis' },
    { value: 'Benchmark_Package', label: 'Benchmark Package' },
]

export default function Slider(props) {

    const sliderBgStyle = {
        backgroundImage:'url(' + headerBg + ')', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'right', 
        backgroundSize: 'inherit'
    }
    
    return (
        <>
        <section id="parallax2" className="slider-area fix p-relative">
            <div className="slider-shape ss-two layer" data-depth="0.30">
                <div className="per-text">
                    <h2>We Build<span>Champions</span></h2>
                </div>
            </div>
            <div className="slider-shape ss-six layer" data-depth="0.15">
                <img src={headerObject} alt="shape" />
            </div>
            <div className="slider-shape ss-eight layer" data-depth="0.50">
                <img src={headerImg} alt="shape" />
            </div>
            <div className="slider-active2">
                <div className="single-slider slider-bg d-flex align-items-center" style={sliderBgStyle}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="slider-content s-slider-content text-left">
                                    <h2 data-animation="fadeInUp" data-delay=".4s">
                                        Set Your Benchmarks Achieve <span>Your Goals</span>
                                    </h2>
                                    <p data-animation="fadeInUp" data-delay=".6s">
                                        Clinical grade metabolic analysis, 3D body scanning, and AI-Nutrition planning performed from the comfort of your own home or office.
                                    </p>
                                    <div className="slider-btn mt-25">                                          
                                        <a href="#" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Learn More</a>					
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- slider-area-end -->
        <!-- booking-area --> */}
        <section id="booking" className="booking-area p-relative">
            <div className="container">
                <form action="#" className="contact-form" >
                    <div className="row align-items-center">
                        <div className="col-lg-12"> 
                            <ul>
                                <li> 
                                    <div className="contact-field p-relative c-name">  
                                        <img src={adIcon1} />
                                        <select id="city" className="form-control">
                                            <option value=""  defaultValue>Select City</option>
                                            {cities.map((city, index) => (
                                                <option key={index} value={city.value}>{city.label}</option>
                                            ))}
                                        </select>
                                    </div>      
                                </li>
                                <li> 
                                    <div className="contact-field p-relative c-name">  
                                        <img src={adIcon2} />
                                        <select id="serviceType" className="form-control">
                                            <option value=""  defaultValue>Service Type</option>
                                            {serviceTypes.map((serviceType, index) => (
                                                <option key={index} value={serviceType.value}>{serviceType.label}</option>
                                            ))}
                                        </select>
                                    </div>      
                                </li>
                                <li className="third-booking-item"> 
                                    <div className="contact-field p-relative c-name">  
                                        <img src={adIcon3} />
                                        <select id="service" className="form-control">
                                            <option value=""  defaultValue>Choose Your Service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service.value}>{service.label}</option>
                                            ))}
                                        </select>
                                    </div>      
                                </li>
                                <li>
                                    <div className="slider-btn">                                          
                                        <a href="#" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Book Your Appointment</a>
                                    </div>     
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        {/* <!-- booking-area-end --> */}
    </>
    );
}