import React, { useState, useEffect } from "react"
import { 
    Row, Col,
    FormGroup, Button } from "reactstrap"

import facebookIcon from '../../../assets/images/bg/facebook-logo.png'
import googleIcon from '../../../assets/images/bg/google-icon.png'

export default function SocialButtonGroup(props) {

    return (
        <Row className="match-height text-center mt-30">
            <Col lg="12" md="12" sm="12">
                <FormGroup>
                    <Button className="sign-input sign-btn sign-facebook-btn mb-2">
                        <img src={facebookIcon} className="sign-facebook-icon"/>Sign In with Facebook</Button>
                </FormGroup>
            </Col>
            <Col lg="12" md="12" sm="12">
                <FormGroup>
                    <Button className="sign-input sign-btn sign-google-btn mb-2">
                        <img src={googleIcon} className="sign-google-icon"/>Sign In with Google</Button>
                </FormGroup>
            </Col>
        </Row>
    )
}
