import React, { useState } from 'react'
import useInput from './hooks/useInput'

// export default function Form() {
//   const [userName, setUserName] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Username : ${userName}` + `\nFirst Name : ${firstName}` + `\nLast Name : ${lastName}`);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username</label>
//         <input type='text' placeholder='username' value={userName} onChange={(event) => setUserName(event.target.value)}></input>
//       </div>
//       <div>
//         <label>First Name</label>
//         <input type='text' placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
//       </div>
//       <div>
//         <label>Last Name</label>
//         <input type='text' placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
//       </div>
//       <input type='submit' value='Submit'></input>
//     </form>
//   )
// }
export default function Form() {
  const [userName, bindUserName, resetUserName] = useInput('')
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username : ${userName}` + `\nFirst Name : ${firstName}` + `\nLast Name : ${lastName}`);
    resetUserName()
    resetFirstName()
    resetLastName()
  
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type='text' placeholder='username' {...bindUserName}></input>
      </div>
      <div>
        <label>First Name</label>
        <input type='text' placeholder='First Name' {...bindFirstName}></input>
      </div>
      <div>
        <label>Last Name</label>
        <input type='text' placeholder='Last Name' {...bindLastName}></input>
      </div>
      <input type='submit' value='Submit'></input>
    </form>
  )
}
