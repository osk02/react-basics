import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
    const [post, setPost] = useState({})
    const [id, setID] = useState(1)
    const [idFromBtnClk, setIdFromBtnClk] = useState(1)
    const clickHandler = () => {
        setIdFromBtnClk(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClk}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromBtnClk])
  return (
    <div>
        <input type='text' placeholder='Enter ID' value={id} onChange={e => setID(e.target.value)}/>
        <button type='button' onClick={clickHandler}>Fetch Post</button>
        <div>{post.title}</div>
    </div>
  )
}

export default FetchData
