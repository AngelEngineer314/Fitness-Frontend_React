// [ 20-09-24 by Angel ] -> Admin/Dashboard/Revenue/Setting Calender Modal

import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import {
    Row, Col,
    Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Button
} from "reactstrap"
import { CreditCard } from 'react-feather'
// import DatePicker from "reactstrap-date-picker"
import { PaymentInputsContainer } from 'react-payment-inputs';
import InputMask from "react-input-mask";
import { submitCardSave } from "../../../redux/checkout/checkoutRedux"

export default function AddCardDialog(props) {
    const dispatch = useDispatch()
    const { onOpenDialog, onCloseDialog } = props

    const [cardNumber, setCardNumber] = useState('')
    const [name, setName] = useState('')
    // const [expiration, setExpiration] = useState({
    //     value: new Date().toISOString(),
    //     formattedValue: '',
    // })
    const [expiration, setExpiration] = useState('')
    const [securityCode, setSecurityCode] = useState('')
    const [zipCode, setZipCode] = useState('')

    const handleChangeExpiryDate = (e) => {
        setExpiration(e.target.value)
    }

    const handleDatePicker = (value, formattedValue) => {
        setExpiration({
            value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        }) 
    }

    const handleChangeCardDetail = type => (e) => {
        const inputVal = e.target.value
        if (type === 'cardNumber') {
            setCardNumber(inputVal)
        } else if (type === 'name') {
            setName(inputVal)
        } else if (type === 'securityCode') {
            setSecurityCode(inputVal)
        } else if (type === 'zipCode') {
            setZipCode(inputVal)
        }
    }

    const handleSaveCard = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const cardData = {
            cardNumber: formData.get('card_number'),
            name: formData.get('name'),
            expiration: formData.get('expiration'),
            securityCode: formData.get('security_code'),
            zipCode: formData.get('zip_code'),
        }
        dispatch(submitCardSave(cardData))
    }

    return (
        <Modal
            isOpen={onOpenDialog}
            toggle={onCloseDialog}
            className="modal-dialog-centered"
            className={`modal-dialog-centered modal-lg`}
            >
            <ModalHeader toggle={onCloseDialog} className="order-dialog-header">
                <CreditCard /><span style={{marginLeft: 10}}>Add a Card</span>
            </ModalHeader>
            <ModalBody>
                <Form className="add-card-form" onSubmit={handleSaveCard}>
                    <Row className="match-height text-left">
                        <Col lg="6" md="6" sm="12">
                            <FormGroup>
                                <p className="mb-10">*Card Number</p>
                                <InputMask 
                                    className="form-control" id="card-number" name="card_number" 
                                    mask="9999 9999 9999 9999" 
                                    value={cardNumber} 
                                    onChange={handleChangeCardDetail('cardNumber')} required/>
                            </FormGroup>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <FormGroup>
                                <p className="mb-10">*Name</p>
                                <Input 
                                    className="mb-2" id="name" name="name" value={name} 
                                    onChange={handleChangeCardDetail('name')} required/>
                            </FormGroup>
                        </Col>
                        <Col lg="3" md="3" sm="12">
                            <FormGroup>
                                <p className="mb-10">*Expiration</p>
                                {/* <DatePicker 
                                    dateFormat="MM/YYYY"
                                    name="expiration"
                                    id = "expiration" 
                                    value = {expiration.value} 
                                    onChange = {(v,f) => handleDatePicker(v, f)} required/> */}
                                <PaymentInputsContainer>
                                    {({ meta, getExpiryDateProps }) => (
                                        <div>
                                            <input className="form-control" {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiration} required/>
                                            {meta.isTouched && meta.error && <p className="text-danger mt-10">* {meta.error}</p>}
                                        </div>
                                    )}
                                </PaymentInputsContainer>
                            </FormGroup>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                            <FormGroup>
                                <p className="mb-10">*Security Code</p>
                                <Input 
                                    type="number" className="mb-2" id="security-code" name="security_code" value={securityCode}
                                    onChange={handleChangeCardDetail('securityCode')} required/>
                                {securityCode.length !== 0 ? 
                                    securityCode.length < 3 ? <p className="text-danger mt-10">* Must be at least 3 digits and up to 4 digits.</p> : null : null}
                                {securityCode.length !== 0 ? 
                                    securityCode.length > 4 ? <p className="text-danger mt-10">* Must be at least 3 digits and up to 4 digits.</p> : null : null}
                            </FormGroup>
                        </Col>
                        <Col lg="3" md="3" sm="12">
                            <FormGroup>
                                <p className="mb-10">*Zip Code</p>
                                <Input 
                                    type="number" className="mb-2" id="zipCode" name="zip_code" value={zipCode}
                                    onChange={handleChangeCardDetail('zipCode')} required/>
                                {securityCode.length !== 0 ? 
                                    zipCode.length !== 5 ? <p className="text-danger mt-10">* Must be 5 digits.</p> : null : null}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="match-height mt-30 text-center">
                        <Col lg="12" md="12" sm="12">
                            <div className="order-btn">
                                <Button type="submit" className="btn">Save Card</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    )
}

