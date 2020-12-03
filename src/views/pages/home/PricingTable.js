import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PricingBox from "../../ui-elements/pricingBox/PricingBox"

import priceBgPrimary from "../../../assets/images/bg/price-bg-primary.png"
import circleLine from "../../../assets/images/bg/circle-line.png"
import priceIconBodyScan from "../../../assets/images/bg/price-icon_body_scan.png"
import priceIconMetabolic from "../../../assets/images/bg/price-icon_metabolic.png"
import priceIcon3 from "../../../assets/images/bg/price-icon3.png"

const pricingBoxList = [
  {
    title: "3D Body Scan",
    priceIcon: priceIconBodyScan,
    pricingList: [{ label: "Fast One Minute Results" }, { label: "Full Body 3D Image" }, { label: "Precise Measurements" }, { label: "Health Assessment" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "59"
  },
  {
    title: "Metabolic Analysis",
    priceIcon: priceIconMetabolic,
    pricingList: [{ label: "Resting Metabolic Rate (RMR) Testing" }, { label: "V02 Max Testing" }, { label: "Fitness Assessment" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "249"
  },
  {
    title: "Benchmark Package",
    priceIcon: priceIcon3,
    pricingList: [{ label: "3D Body Scan" }, { label: "RMR Testing" }, { label: "Vo2 Max Testing" }, { label: "Metabolic Nutrition Plan" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "349"
  }
]

export default function PricingTables(props) {
  return (
    <section id="pricing" className="pricing-area p-relative pt-120 pb-60">
      <div className="parolx-text-right">Value Pack</div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title center-align mb-60 text-center">
              <h2>Pricing Table</h2>
              <img src={circleLine} alt="circle" />
            </div>
          </div>
        </div>
        <div className="row">
          {pricingBoxList.map((pricingBox, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <PricingBox title={pricingBox.title} priceIcon={pricingBox.priceIcon} pricingList={pricingBox.pricingList} price={pricingBox.price} priceBg={priceBgPrimary} color="primary" />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="pricing-btn center-align text-center">
            <a href="/pricing" className="btn">
              Specials & Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
