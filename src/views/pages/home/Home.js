import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'

import Slider from './Slider'
import AboutUs from './AboutUs'
import OurServices from './OurServices'
import WatchUs from './WatchUs'
import PricingTable from './PricingTable'
import Testimonil from './Testimonil'
import OurBlogs from './OurBlogs'

export default function Home(props) {
    
    return (
        <>
            <Row className="match-height">
                <Col lg="12" md="12" sm="12">
                    <Slider />
                </Col>
            </Row>
            <Row className="match-height">
                <Col lg="12" md="12" sm="12">
                    <AboutUs />
                </Col>
            </Row>
            <Row className="match-height">
                <Col lg="12" md="12" sm="12">
                    <OurServices />
                </Col>
            </Row>
            <Row className="match-height">
                <Col lg="12" md="12" sm="12">
                    <WatchUs />
                </Col>
            </Row>
            <Row className="match-height">
                <Col lg="12" md="12" sm="12">
                    <PricingTable />
                </Col>
            </Row>
        </>
    );
}