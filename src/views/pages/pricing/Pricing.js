import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "reactstrap"

import PricingTables from "./PricingTables"

import priceBgPrimary from "../../../assets/images/bg/price-bg-primary.png"
import priceBgYellow from "../../../assets/images/bg/price-bg-yellow.png"

export default function Pricing(props) {
  return (
    <>
      <Row className="match-height">
        <Col lg="12" md="12" sm="12">
          <PricingTables blockLabel="Individual" priceBg={priceBgPrimary} cardColor="primary" />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="12" md="12" sm="12">
          <PricingTables blockLabel="Packages" priceBg={priceBgYellow} cardColor="yellow" />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="12" md="12" sm="12">
          <PricingTables blockLabel="Memberships" priceBg={priceBgPrimary} cardColor="primary" unit="/ monthly" />
        </Col>
      </Row>
    </>
  )
}
