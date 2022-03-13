import React, {useState} from 'react';
import Header from './Header';

export default function Inputt() {

    const [inputField , setInputField] = useState({
        Amount: '',
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.amount]: e.target.value} )
    }

    const submitButton = () =>{
        alert(inputField.Amount);
        <Header cart={inputField.Amount}/>
    }

    return (
        <div>
            <input 
            type="number" 
            amount="Amount" 
            onChange={inputsHandler} 
            placeholder="Amount" 
            value={inputField.Amount}/>

            <button onClick={submitButton}>Add to Cart</button>
        </div>
    )
}
