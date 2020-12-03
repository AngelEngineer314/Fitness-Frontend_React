import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PricingBox from "../../ui-elements/pricingBox/PricingBox"

import circleLine from "../../../assets/images/bg/circle-line.png"
import priceIconBodyScan from "../../../assets/images/bg/price-icon_body_scan.png"
import priceIconMetabolic from "../../../assets/images/bg/price-icon_metabolic.png"
import iconBoccoliOutline from "../../../assets/images/bg/icon-broccoli-outline.png"
import iconRacing from "../../../assets/images/bg/icon-racing-w.png"
import s_icon1 from "../../../assets/images/bg/s-icon1.png"
import priceIcon3 from "../../../assets/images/bg/price-icon3.png"

const pricingTableList = [
  {
    title: "3D Body Scan",
    priceIcon: priceIconBodyScan,
    pricingList: [{ label: "Fast One Minute Results" }, { label: "Full Body 3D Image" }, { label: "Precise Measurements" }, { label: "Health Assessment" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "59"
  },
  {
    title: "RMR Testing",
    priceIcon: s_icon1,
    pricingList: [{ label: "Resting Metabolic Rate (RMR)" }, { label: "Daily Calorie Burn" }, { label: "Oxygen Consumption" }, { label: "Body's Main Fuel Source" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "99"
  },
  {
    title: "VO2 Max Testing",
    priceIcon: iconRacing,
    pricingList: [{ label: "3D Body Scan" }, { label: "RMR Testing" }, { label: "Vo2 Max Testing" }, { label: "Metabolic Nutrition Plan" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "199"
  }
]

const packages = [
  {
    title: "Metabolic Analysis",
    priceIcon: priceIconMetabolic,
    pricingList: [{ label: "RMR Testing" }, { label: "VO2 Max Testing" }, { label: "Fitness Assessment" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "249"
  },
  {
    title: "Metabolic + Nutrition",
    priceIcon: iconBoccoliOutline,
    pricingList: [{ label: "RMR Testing" }, { label: "V02 Max Testing" }, { label: "Metabolic Nutrition Plan" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "299"
  },
  {
    title: "Benchmark Package",
    priceIcon: priceIcon3,
    pricingList: [{ label: "3D Body Scan" }, { label: "RMR Testing" }, { label: "V02 Max Testing" }, { label: "Metabolic Nutrition Plan" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "349"
  }
]

const memberships = [
  {
    title: "3D Body Scan",
    priceIcon: priceIconBodyScan,
    pricingList: [{ label: "6 Scans" }, { label: "Full Body 3D Image" }, { label: "Precise Measurements" }, { label: "Health Assessment" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "29"
  },
  {
    title: "Metabolic Analysis",
    priceIcon: priceIconMetabolic,
    pricingList: [{ label: "4 RMR Tests" }, { label: "4 V02 Max Testing" }, { label: "Fitness Assessment" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "69"
  },
  {
    title: "Benchmark",
    priceIcon: priceIcon3,
    pricingList: [{ label: "6 3D Body Scan" }, { label: "4 RMR Testing" }, { label: "4 Vo2 Max Testing" }, { label: "Metabolic Nutrition Plan" }, { label: "Detailed Report" }, { label: "Progress Tracking" }],
    price: "99"
  }
]

export default function PricingTables(props) {
  const { blockLabel, priceBg, cardColor, unit } = props

  const [pricingCardList, setPricingCardList] = useState([])

  useEffect(() => {
    if (blockLabel === "Individual") {
      setPricingCardList(pricingTableList)
    } else if (blockLabel === "Packages") {
      setPricingCardList(packages)
    } else if (blockLabel === "Memberships") {
      setPricingCardList(memberships)
    }
    return () => {}
  }, [pricingCardList])

  return (
    <section id="pricing" className="pricing-area p-relative pt-120 pb-60" style={blockLabel === "Packages" ? { background: "#8368FF" } : null}>
      <div className={blockLabel === "Packages" ? "parolx-text-left" : "parolx-text-right"}>{blockLabel}</div>
      <div className="container">
        {blockLabel === "Individual" ? (
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title center-align mb-60 text-center">
                <h2>Pricing Table</h2>
                <img src={circleLine} alt="circle" />
              </div>
            </div>
          </div>
        ) : null}
        <div className="row">
          {pricingCardList.map((pricingCard, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <PricingBox title={pricingCard.title} priceIcon={pricingCard.priceIcon} pricingList={pricingCard.pricingList} price={pricingCard.price} priceBg={priceBg} color={cardColor} unit={unit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
