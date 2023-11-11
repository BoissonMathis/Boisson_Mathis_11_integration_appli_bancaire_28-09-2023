import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postLogin } from './tokenSlice'
import { useNavigate } from 'react-router-dom'

export default function Connection() {
  const [usernameValue,setUsernameValue] = useState('');
	const [passwordValue,setPasswordValue] = useState('');
	
	const dispatch = useDispatch()
  const navigate = useNavigate()

  const authenticated = useSelector(state => state.token.authenticated)
  const error = useSelector(state => state.token.error)

  function postLoginSubmit(event) {
    event.preventDefault()

    dispatch(postLogin({
      email: usernameValue,
      password: passwordValue
    }))

  }

  console.log(authenticated)

  useEffect(() => {

    if(authenticated === true){
      navigate('/user')
    }

  },[authenticated, navigate])

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={usernameValue} 
          onChange={(e) => setUsernameValue(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={passwordValue} 
          onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" id='postLoginButton'
          onClick={
            postLoginSubmit
          }
        >
          Sign In
        </button>
        <p className='wrongLogin'>{error}</p>
      </form>
    </section>
  )
}