import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { home } from "../../Routes/Routes";
import { fetchProfile } from '../features/Profile/profileSlice.js'
import Username from '../features/Profile/profile.js'
import "../Style.scss"

function User() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const connected = useSelector(state => state.token.authenticated)
  const token = useSelector(state => state.token.value)

  useEffect(() => {
    if(connected === false){
      navigate(home)
    }
  },[connected, navigate])

  useEffect(() => {
    dispatch(fetchProfile({
      token
    }))
  }, [token, dispatch])

    return (
      <div>
        <div className="body">
          <main className="main bg-dark">
            <div className="header">
              <Username />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
  
  export default User;