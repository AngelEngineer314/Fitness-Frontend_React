import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import ServiceCard from "../../ui-elements/serviceCard/ServiceCard"

import circleLine from "../../../assets/images/bg/circle-line.png"
import priceIconBodyScan from "../../../assets/images/bg/price-icon_body_scan.png"
import iconRacing from "../../../assets/images/bg/icon-racing-w.png"
import iconCalender from "../../../assets/images/bg/icon-calendar-w.png"
import s_icon1 from "../../../assets/images/bg/s-icon1.png"

const serviceCardList = [
  {
    title: "3D Body Scan",
    serviceIcon: priceIconBodyScan,
    serviceLink: "",
    description: "The most acurate full body 3D imaging and precise body measurements.",
    active: true
  },
  {
    title: "RMR Testing",
    serviceIcon: s_icon1,
    serviceLink: "",
    description: "How many calories, carbs, & fats your body burns at rest in a 24 hour period.",
    active: false
  },
  {
    title: "Vo2 Max",
    serviceIcon: iconRacing,
    serviceLink: "",
    description: "Assess your level of cardiovascular fitness & aerobic/anaerobic thresholds.",
    active: false
  },
  {
    title: "Events",
    serviceIcon: iconCalender,
    serviceLink: "",
    description: "Hire us for your next wellness, bootcamp, or fitness challenge. Sports teams also welcome to reach out.",
    active: false
  }
]

export default function OurService(props) {
  return (
    <section id="services" className="services-area services-bg pt-120 pb-120 p-relative" style={{ background: "#FBFAFF 0% 0% no-repeat padding-box" }}>
      <div className="parolx-text-right">Our Services</div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-content s-about-content pl-30">
              <div className="section-title mb-50">
                <h2>Build Your Body Transform Your Life</h2>
                <img src={circleLine} alt="circle" />
              </div>
              <p>Tracking your progress is the best way to stay motivated which in turn keeps you on your diet and training regimen. Our 3D scanning and metabolic nutrition plans are great for those looking to achieve their fitness goals.</p>
              <p>At Benchmark Fitness Labs we give you access to tools normally reserved for elite professional athletes. No matter what level athlete you are - if you are looking to improve your PR’s, then let Benchmark’s clinical grade performance technology give you the extra boost you need.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row">
              {serviceCardList.map((serviceCard, index) => (
                <div className="col-lg-6 col-md-6" key={index}>
                  <ServiceCard serviceIcon={serviceCard.serviceIcon} title={serviceCard.title} serviceLink={serviceCard.serviceLink} description={serviceCard.description} active={serviceCard.active} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
