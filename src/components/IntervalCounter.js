import React, { useState, useEffect } from 'react'

export default function IntervalCounter() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1) // can use `prevCount => prevCount + 1` here and remove `count` from dependency array
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])
    // useEffect(() => {
    //     console.log('useEffect with [] array')
    // }, [])
    // useEffect(() => {
    //     console.log('useEffect without [] array')
    // })
  return (
    <div>
      Counter - {count}
    </div>
  )
}
