import backg from '../backg.jpg'
import CardComp from './CardComp'
import { Card, CardGroup } from 'react-bootstrap';
import React, {useState} from 'react';
import menu from './menu'

export default function BodyMain() {

 
  return (
     <>

  <div className='div1' style={{ backgroundImage:`url(${backg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    height:800,width:1349
    }}>
    <div >
      <Card  className='Card1'>
    <Card.Body >
      <Card.Title>Delicious Food, Delivered To You</Card.Title>
      <Card.Text>
      Choose your favorite meal
       from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
      All our meals are cooked with high-quality ingredients, just-in-time and of course by 
      experienced chefs!
      </Card.Text>
    </Card.Body>
    </Card>
   </div>
    <div>
     <CardComp menu={menu}/>
     </div>
    </div>

    </>
  )
  
}

