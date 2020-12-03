import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import aboutImage from "../../../assets/images/bg/about-img.png"
import circleLine from "../../../assets/images/bg/circle-line.png"

export default function AboutUs(props) {
  return (
    <section id="about" className="about-area about-p mt-80 pt-120 pb-120 p-relative">
      <div className="parolx-text-left">About Us</div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="s-about-img p-relative">
              <img src={aboutImage} alt="img" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-content s-about-content pl-30">
              <div className="section-title mb-50">
                <h2>Let Us Find The Perfect Workout For You !</h2>
                <img src={circleLine} alt="circle" />
              </div>
              <p>Benchmark Fitness Labs is on a mission to provide clinical grade health & performance tracking to everyone. Our services are completely mobile, meaning we come to your home, office, event, or facility.</p>
              <p>We offer the most accurate 3D body scan and the most precise self contained metabolic analysis device on the market.</p>
              <p>t Benchmark fitness Lab we s stands behind our results and so do institutions like Rutgers Biomedical, Pennington Biomedical, UCLA, Georgetown University - Just to name a few.</p>
              <p>If you are looking to take your training to the next level or just looking for starting benchmarks, contact us today.</p>
              <div className="slider-btn mt-15">
                <a href="#" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
