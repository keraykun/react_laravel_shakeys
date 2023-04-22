import React from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import axiosClient from '../../axios-client.js'
import { useStateContext } from "../contexts/ContextProvider"

export default function Register(){
  const {setToken,setUser} = useStateContext()
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const passwordConfirm = useRef()

  function onHandlerSubmit (ev){
    ev.preventDefault()

    const payload = {
      name:name.current.value,
      email:email.current.value,
      password:password.current.value,
      password_confirm:passwordConfirm.current.value
    }

  axiosClient.post('/signup',payload).
  then(({data})=>{
    console.log(data)
    // setUser(data.user)
    // setToken(data.token)
  }).
  catch(err=>{
    console.log(err)
    const response = err.response
    if(response && response.status===422){
      console.log(response.data.errors)
    }
  })

  }

  return(
    <div className="login-signup-form animated fadeInDown">
      <form onSubmit={onHandlerSubmit} className="form">
        <h1>Register your account</h1>
        <input ref={name} type="name" placeholder="Name" />
        <input ref={email} type="email" placeholder="Email" />
        <input ref={password} type="password" placeholder="password" />
        <input ref={passwordConfirm} type="password" placeholder="Confirm password" />
        <button className="btn btn-block">Register</button>
        <p className="message">
          Already have account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  )
}
