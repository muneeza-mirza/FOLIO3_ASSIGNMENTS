import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Cart from './Cart';

export default function Header(props){

    const [cartnum, setcartnum] = useState(0);
    const handleInput = ()=>{
        setcartnum(prevState => prevState + props.cart);
    }
    return(
        
  <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" >ReactMeals</a>
  <Button onClick={<Cart/>} className='cartbuttn' size='sm' variant="light">Cart {cartnum}</Button> 
</nav>

    )
}