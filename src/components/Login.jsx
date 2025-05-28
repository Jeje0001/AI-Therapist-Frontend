import React from "react";
import { useState } from "react";
import "../styles/login.css"
import { Link } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const changeEmail=(event)=>{
    setEmail(event.target.value)
  }
  const changePassword=(event)=>{
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("https://ai-therapist-project-tg8u.onrender.com/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();
    console.log(data); 

    if (data.response === "Logged in") {
      alert("Login successful!");
    } else {
      alert(data.response); 
    }

  } catch (error) {
    console.error("Error logging in:", error);
    alert("Something went wrong. Try again.");
  }
};
  
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
  