import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter()
  return (
    <div>
        <h2>Count - {count}</h2>
        <button className='btn' onClick={increment}>Increment</button>
        <button className='btn' onClick={decrement}>Decrement</button>
        <button className='btn' onClick={reset}>Reset</button>
      
    </div>
  )
}

export default CounterOne
