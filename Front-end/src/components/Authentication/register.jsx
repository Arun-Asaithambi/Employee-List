import React, { useEffect, useState } from 'react'
import  axios from 'react'


export default function Register(){


   const [username , setUsername] = useState("")
   const [email , setEmail] = useState("")
   const [password , setPassword] = useState("")

const register = () => {
    const data = {username , email, password}
    axios.post('http://localhost:3000/register', data)
 }

  return (
    <div className='register'>

        <div className="username">
            <label htmlFor="username">Username  </label>
            <input type="text" name="username" id="username" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value) } />

        </div>
        <div className="email">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" placeholder='email-address' value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>
        <div className="password">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" placeholder='password'  value={password} onChange={(e) => setPassword(e.target.value)} />

        </div>
        <button onClick={register} >Regsiter</button>
      
    </div>
  )
}


