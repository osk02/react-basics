import {useState} from 'react'

export const Message = () => {
    const [message, setMessage] = useState('Welcome Visitor');
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Button Clicked')}>Click Here</button>
        </div>
    );
}