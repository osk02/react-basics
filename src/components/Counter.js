import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [countValue, setCountValue] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `Count Clicked ${countValue} times`
    }, [countValue])
    return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCountValue(countValue + 1)}>Count {countValue}</button>
    </div>
  )
}
