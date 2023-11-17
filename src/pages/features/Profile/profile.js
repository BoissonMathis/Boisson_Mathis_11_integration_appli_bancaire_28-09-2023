import React, 
{useEffect, useState } 
from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchProfile, 
  editUserName 
} from './profileSlice.js'

export default function Name() {
  
  const username = useSelector(state => state.profile.userName)
  const firstname = useSelector(state => state.profile.firstName)
  const lastname = useSelector(state => state.profile.lastName)
  const token = useSelector(state => state.token.value)

  const [isVisible, setIsVisible] = useState(false);
  const [usernameValue, setUsernameValue] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProfile({
      token
    }))
  }, [token, dispatch])

  const displayEditInput = function() {
    setIsVisible(!isVisible)
  }

  const editNewUsername = function() {
    if(usernameValue !== ""){
      dispatch(editUserName({
        token: token,
        userName: usernameValue
      }))
      setIsVisible(!isVisible)
    }else{
      document.getElementById('emptyFieldError')
    }
  }

  return (
    <div>
      <h1 className={`center ${isVisible ? "invisible" : "visible"}`} key={ username } > Welcome back<br />{ username } ! </h1>
      <h1 className={`center ${isVisible ? "visible" : "invisible"}`} >Edit your profile</h1>
      <div className={`editProfileDiv ${isVisible ? "visible" : "invisible"}`}>
        <div className='editTextInput'>
          <label className="editLabel" id='usernameLabel' htmlFor="username">User name</label>
          <input type="text" id="username" name="username" placeholder={username} required value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
          />
        </div>
        <div className='editTextInput'>
          <label className="editLabel" id='firstnameLabel' htmlFor="firstname">First name</label>
          <input className="locked" type="text" id="firstname" name="firstname" readOnly value={firstname}/>
        </div>
        <div className='editTextInput'>
          <label className="editLabel" id='lastnameLabel' htmlFor="lastname">Last name</label>
          <input className="locked" type="text" id="lastname" name="lastname" readOnly value={lastname}/>
        </div>
      </div>
      <div className='center flex gap10'>
        <button className={`edit-button ${isVisible ? "invisible" : "visible"}`}
        onClick={displayEditInput}>
        Edit Username
        </button>
        <button className={`edit-button saveAndCancelButtons ${isVisible ? "visible" : "invisible"}`}
        onClick={editNewUsername}>
        Save
        </button>
        <button className={`edit-button saveAndCancelButtons ${isVisible ? "visible" : "invisible"}`}
        onClick={displayEditInput}>
        Cancel
        </button>
      </div>
    </div>
  )
}