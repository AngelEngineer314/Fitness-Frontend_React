import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Row, Col } from "reactstrap"
import Service from "./Service"
import BookAppointment from "./BookAppointment"

export default function Booking(props) {

  const [isContinueLocation, setIsContinueLocation] = useState(false)

  const resNewServiceLocationData = useSelector(state => state.bookingRedux.serviceLocationDetail)

  useEffect(() => {
      if (resNewServiceLocationData.length !== 0) {
        setIsContinueLocation(true)
      }
      return () => {
      }
  }, [resNewServiceLocationData])

  return (
    <>
      <Row className="match-height">
        <Col lg="12" md="12" sm="12">
          {!isContinueLocation ?
            <Service /> : <BookAppointment />
          }
        </Col>
      </Row>
    </>
  )
}
