import React from 'react'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaBirthdayCake } from 'react-icons/fa'
const MyCard = ({details}) => {

  return (
    <Card>
      <CardBody className="text-center">
        <img src={details.picture?.large} alt="userProfile" height="150px" width="150px" className="rounded-circle img-thumbnail border-danger" />
      <CardTitle className="text-primary">
        <h1>
          <span className="pr-2">{details.name?.title}</span>
          <span>{details.name?.first}</span>
          <span>{details.name?.last}</span>
        </h1>  
      </CardTitle>
      <CardText>
        <FaMapMarkedAlt className="mr-2 text-primary"/>
        <h3>{details.location?.city}</h3>
        <FaPhone className="text-primary"/> <span className="text-secondary">{details.phone}</span><br/>
        <FaEnvelope className="mr-2 text-primary"/><span className="text-secondary">{details.email}</span><br/>
        <FaBirthdayCake className="mr-2 text-primary"/><span className="success">{(new Date(details.dob?.date)).toLocaleDateString()}</span>

      </CardText>
      </CardBody>
    </Card>
  )
}


export default MyCard;
