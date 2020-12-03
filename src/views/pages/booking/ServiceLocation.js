import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { 
    Row, Col,
    Form, FormGroup, Input, Button } from "reactstrap"
import Select from "react-select"
import { submitContinueLocation } from "../../../redux/booking/bookingRedux"

const stateData = [
    { value: "Alaska", label: "Alaska",},
    { value: "Alabama", label: "Alabama",},
    { value: "Arkansas", label: "Arkansas",},
    { value: "California", label: "California",},
    { value: "Colorado", label: "Colorado",},
    { value: "Connecticut", label: "Connecticut",},
    { value: "DistrictOfColumbia", label: "District of Columbia",},
    { value: "Delaware", label: "Delaware",},
    { value: "Florida", label: "Florida",},
    { value: "Georgia", label: "Georgia",},
    { value: "Hawaii", label: "Hawaii",},
    { value: "Iowa", label: "Iowa",},
    { value: "Idaho", label: "Idaho",},
    { value: "Illinois", label: "Illinois",},
    { value: "Indiana", label: "Indiana",},
    { value: "Kansas", label: "Kansas",},
    { value: "Kentucky", label: "Kentucky",},
    { value: "Louisiana", label: "Louisiana",},
    { value: "Massachusetts", label: "Massachusetts",},
    { value: "Maryland", label: "Maryland",},
    { value: "Maine", label: "Maine",},
    { value: "Michigan", label: "Michigan",},
    { value: "Minnesota", label: "Minnesota",},
    { value: "Missouri", label: "Missouri",},
    { value: "Mississippi", label: "Mississippi",},
    { value: "Montana", label: "Montana",},
    { value: "NorthCarolina", label: "North Carolina",},
    { value: "NorthDakota", label: "Dakota",},
    { value: "Nebraska", label: "Nebraska",},
    { value: "NewHampshire", label: "New Hampshire",},
    { value: "NewJersey", label: "New Jersey",},
    { value: "NewMexico", label: "New Mexico",},
    { value: "Nevada", label: "Nevada",},
    { value: "NewYork", label: "New York",},
    { value: "Ohio", label: "Ohio",},
    { value: "Oklahoma", label: "Oklahoma",},
    { value: "Oregon", label: "Oregon",},
    { value: "Pennsylvania", label: "Pennsylvania",},
    { value: "RhodeIsland", label: "Rhode Island",},
    { value: "SouthCarolina", label: "South Carolina",},
    { value: "SouthDakota", label: "South Dakota",},
    { value: "Tennessee", label: "Tennessee",},
    { value: "Texas", label: "Texas",},
    { value: "Utah", label: "Utah",},
    { value: "Virginia", label: "Virginia",},
    { value: "Vermont", label: "Vermont",},
    { value: "Washington", label: "Washington",},
    { value: "Wisconsin", label: "Wisconsin",},
    { value: "WestVirginia", label: "West Virginia",},
    { value: "Wyoming", label: "Wyoming",},
]

export default function ServiceLocation(props) {
    const dispatch = useDispatch();

    const [zipCode, setZipCode] = useState('')

    const handleChangeLocationDetail = type => (e) => {
        if (type === 'zipCode') {
            setZipCode(e.target.value)
        }
    }

    const handleContinueLocation = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        if (zipCode.length === 5) {
            const serviceLocationData = {
                address: formData.get('address'),
                unit: formData.get('unit'),
                city: formData.get('city'),
                state: formData.get('state'),
                zipCode: formData.get('zip_code'),
            }
            dispatch(submitContinueLocation(serviceLocationData))
        }
    }

    return (
        <Form className="service-location" onSubmit={handleContinueLocation}>
            <div className="service-location-form">
                <Row className="match-height text-left">
                    <Col lg="6" md="6" sm="12">
                        <FormGroup>
                            <p className="mb-30">Address</p>
                            <Input className="mb-2" id="address" name="address" defaultValue="" required/>
                        </FormGroup>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <FormGroup>
                            <p className="mb-30">Unit</p>
                            <Input className="mb-2" id="unit" name="unit" defaultValue=""/>
                        </FormGroup>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <FormGroup>
                            <p className="mb-30">City</p>
                            <Input className="mb-2" id="city" name="city" defaultValue="" required/>
                        </FormGroup>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <FormGroup>
                            <p className="mb-30">State</p>
                            <Select
                                defaultValue={stateData[0]}
                                isClearable={true}
                                options={stateData}
                                className="React mb-2"
                                classNamePrefix="select"
                                name="state"
                                id="state"
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                        <FormGroup>
                            <p className="mb-30">Zip Code</p>
                            <Input className="mb-2" id="zip_code" name="zip_code" onChange={handleChangeLocationDetail('zipCode')} required/>
                            {zipCode.length !== 0 ? zipCode.length !== 5 ? <p className="text-danger">* Zip Code should be 5 digits.</p> : null : null}
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            <div className="pricing-btn service-location-btn mt-30">
                <Button type="submit" className="btn">Continue</Button>
            </div>
        </Form>
    )
}
