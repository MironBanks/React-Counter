import React, { useState } from 'react'
import './CounterApp.css'





const CounterApp = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }




    return (
        <div className='counter-app'>
            <h1 className='value'>{count}</h1>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
        </div>
    )
}




export default CounterApp