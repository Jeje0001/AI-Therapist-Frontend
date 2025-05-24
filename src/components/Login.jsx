import React from "react";
import { useState } from "react";
import "../styles/login.css"

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const changeEmail=(event)=>{
    setEmail(event.target.value)
  }
  const changePassword=(event)=>{
    setPassword(event.target.value)
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
     console.log(email)
      console.log(password)

  }
  
    return (
      <div className="login-container">
        <h1>Login to MindHaven</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="email"  name="email" placeholder="Email" onChange={changeEmail} value={email}/>
        <label htmlFor="email"></label>
        <input type="password" name="password" placeholder="Password" onChange={changePassword} value={password}/>
        <label htmlFor="password"></label>
        <button type="submit" >Login</button>
       
        </form>
      </div>
      
    )
    
  }
  
  export default Login;
  