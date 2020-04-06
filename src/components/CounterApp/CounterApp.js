import React, { useState } from 'react'
import './CounterApp.css'




class CounterApp extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    state = {
        count: 0
    }

    increment = (step) => {
        this.setState({
            count: this.state.count + step
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <div className='counter-app'>
                    <h1 className='value'>{count}</h1>
                    <button onClick={() => this.increment(1)} >Increment</button>
                    <button onClick={() => this.increment(-1)} >Decrement</button>
                </div>
            </div>
        )
    }
}



export default CounterApp