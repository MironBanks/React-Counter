import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './CounterApp.css'
import CounterView from './CounterView'


const CounterApp = (props) => {

    const [count, setCount] = useState(0)
    const { title } = props

    useEffect(() => {
        console.log('useEffect from CounterApp')
    }, [])

    const increment = (step) => () => setCount(count + step)


    return (
        <div>
            <div className='counter-app'>
                <h1>{title}</h1>
                <CounterView
                    countValue={count}
                    handleIncrement={increment}
                />
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    title: PropTypes.string.isRequired
}



export default CounterApp