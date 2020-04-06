import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CounterApp.css'


const CounterApp = (props) => {

    const [count, setCount] = useState(0)
    const { title } = props

    const increment = (step) => () => setCount(count + step)


    return (
        <div>
            <div className='counter-app'>
                <h1>{title}</h1>
                <h2 className='value'>{count}</h2>
                <button onClick={increment(1)}>Increment</button>
                <button onClick={increment(-1)}>Decrement</button>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    title: PropTypes.string.isRequired
}



export default CounterApp