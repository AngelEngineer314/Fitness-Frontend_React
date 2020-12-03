import React, { useState, useEffect } from "react"
import { 
    Row, Col,
    Form, FormGroup, Input, Button } from "reactstrap"
import SocialButtonGroup from '../../../views/ui-elements/auth/SocialButtonGroup'

import SignBg from '../../../assets/images/bg/sign-bg.png'

const AuthCardStyle = {
    backgroundImage:'url(' + SignBg + ')',
    width: 472,
}

export default function SignIn(props) {

    const onSignIn = (e) => {

    }

    return (
        <section id="SignIn" className="pricing-area p-relative pt-30 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="pricing-box text-center mb-30 mt-30" style={AuthCardStyle}>
                        <div className="pricing-head booking-head">                                  
                            <h4>Welcome Back!</h4>
                        </div>
                        <div className="pricing-body sing-body mt-80 text-center">
                            <Form className="sign-form" onSubmit={onSignIn}>
                                <Row className="match-height text-center">
                                    <Col lg="12" md="12" sm="12">
                                        <FormGroup>
                                            <Input type="email" className="sign-input mb-2" id="email" name="email" placeholder="Email" required/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" md="12" sm="12">
                                        <FormGroup>
                                            <Input type="password" className="sign-input mb-2" id="password" name="password" placeholder="Password" required/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" md="12" sm="12">
                                        <FormGroup>
                                            <Button type="submit" className="sign-input sign-btn mb-2">Sign In</Button>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="12" md="12" sm="12">
                                        <FormGroup>
                                            <a href="#" className="sign-link forgot-link" color="primary"><b>Forgot Password?</b></a>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                            <SocialButtonGroup />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="sign-text">
                        <p>Don't have an account? <a href="/signUp" className="sign-link" color="primary"><b>Sign Up</b></a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
