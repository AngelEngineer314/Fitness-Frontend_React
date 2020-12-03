import React, { useState, useEffect } from "react"
import { 
    Row, Col,
    Form, FormGroup, Input, Button, Badge } from "reactstrap"
import SocialButtonGroup from '../../../views/ui-elements/auth/SocialButtonGroup'

import SignBg from '../../../assets/images/bg/sign-bg.png'

const AuthCardStyle = {
    backgroundImage:'url(' + SignBg + ')',
    width: 472,
}

export default function SignUp(props) {

    const onSignUp = (e) => {

    }

    return (
        <section id="SignUp" className="pricing-area p-relative pt-30 pb-60">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="pricing-box text-center mb-30 mt-30" style={AuthCardStyle}>
                        <div className="pricing-head booking-head">                                  
                            <h4>Welcome!</h4>
                        </div>
                        <div className="pricing-body sing-body mt-80 text-center">
                            <Form className="sign-form" onSubmit={onSignUp}>
                                <Row className="match-height text-center">
                                    <Col lg="12" md="12" sm="12">
                                        <FormGroup>
                                            <Input className="sign-input mb-2" id="name" name="name" placeholder="Full Name" required/>
                                        </FormGroup>
                                    </Col>
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
                                            <Button type="submit" className="sign-input sign-btn mb-2">Sign Up</Button>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                            <SocialButtonGroup />
                            <div>
                                <p>By creating an account, you agree to the Terms of Service.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="sign-text">
                        <p>Already have an account? <a href="/signIn" className="sign-link" color="primary"><b>Sign In</b></a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
