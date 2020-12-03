import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import OrderDetails from './OrderDetail'


export default function Checkout(props) {
    
    return (
        <>
            <Row className="match-height">
                <Col lg="12" md="12" sm="12">
                    <OrderDetails />
                </Col>
            </Row>
        </>
    );
}