import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'

import circleLine from '../../../assets/images/bg/circle-line.png'
import qutation from '../../../assets/images/testimonial/qutation.png'
import testimonialImg from '../../../assets/images/testimonial/testimonial-img.png'

export default function Testimonil(props) {
    
    return (
        <section id="testimonios" className="testimonial-area testimonial-p pt-120 pb-90 fix p-relative" style={{background: '#FBFAFF'}} >
            <div className="parolx-text-left">Testimonial</div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8"> 
                        <div className="section-title center-align mb-60 text-center">
                            <h2>What Our Client Say’s</h2>
                            <img src="img/bg/circle-line.png" alt="circle" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">                           
                        <div className="testimonial-active">
                            <div className="single-testimonial">
                                <div className="testi-img">
                                    <img src={circleLine} alt="img" />                                        
                                </div>
                                <div className="single-testimonial-bg">
                                    <div className="com-icon">
                                        <img src={qutation} alt="img" />
                                    </div>
                                    <div className="testi-author">
                                        <div className="ta-info">                                          
                                            <h6>Louis Carlson</h6>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                    <p>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.</p>
                                </div>
                            </div>
                            <div className="single-testimonial">
                                <div className="testi-img">
                                    <img src={testimonialImg} alt="img" />                                        
                                </div>
                                <div className="single-testimonial-bg">
                                    <div className="com-icon">
                                        <img src={qutation} alt="img" />
                                    </div>
                                    <div className="testi-author">
                                        <div className="ta-info">                                          
                                            <h6>Rose Dose</h6>
                                            <span>Sale Executive</span>
                                        </div>
                                    </div>
                                    <p>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.</p>
                                </div>
                            </div>
                            <div className="single-testimonial">
                                <div className="testi-img">
                                    <img src={testimonialImg} alt="img" />                                        
                                </div>
                                <div className="single-testimonial-bg">
                                    <div className="com-icon">
                                        <img src={qutation} alt="img" />
                                    </div>
                                    <div className="testi-author">
                                        <div className="ta-info">                                          
                                            <h6>Louis Carlson</h6>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                    <p>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.</p>
                                </div>
                            </div>
                            <div className="single-testimonial">
                                <div className="testi-img">
                                    <img src={testimonialImg} alt="img" />                                        
                                </div>
                                <div className="single-testimonial-bg">
                                    <div className="com-icon">
                                        <img src={qutation} alt="img" />
                                    </div>
                                    <div className="testi-author">
                                        <div className="ta-info">                                          
                                            <h6>Jone Dose</h6>
                                            <span>MD & Founder</span>
                                        </div>
                                    </div>
                                    <p>Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}