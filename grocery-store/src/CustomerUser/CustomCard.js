import { Navbar, Nav, Carousel, Card, Button } from 'react-bootstrap';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../logo.jpg"
import s from "./style.module.css"

const CustomCard = ({prodName}) => {
  return (
    <div>
<Card >
    <Card.Img className ={s.image}variant="top" src={logo} />
    <Card.Body className={s.mainCard}>
    <Card.Title className={s.title}>{prodName}</Card.Title>
    
   
    </Card.Body>
    </Card>
    

    </div>
  )
}

export default CustomCard