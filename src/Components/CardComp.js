import React from 'react'
import { Card, CardGroup, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import NumericInput from 'react-numeric-input';
import Inputt  from './Inputt';

export default function CardComp(props) {
  return (
    <>
    <Card className='Card' >
   {props.menu.map((menu)=>{
       return(  
           <Row>   
       <Card.Body>
           <div className='flex-left'>
         <Card.Title>{menu.title}</Card.Title>
         <Card.Text>
           {menu.desc}
         </Card.Text>
         <Card.Title>
           {menu.price}
         </Card.Title>
         </div>
         <div className='flex-right' >
         <Inputt/>
         </div >
       </Card.Body>
       </Row>
       );
   })}
    </Card>
    </>
  )
}