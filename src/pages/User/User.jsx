import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { home } from "../../Routes/Routes";
import { fetchProfile } from '../features/Profile/profileSlice.js'
import Username from '../features/Profile/profile.js'
import Bankaccount from '../../components/Bankaccount/Bankaccount.js'
import { bankaccountInfos } from '../../components/Bankaccount/BankaccountInfo.js';
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
              <Bankaccount title={bankaccountInfos[0].title} balance={bankaccountInfos[0].balance} balanceDescription={bankaccountInfos[0].balanceDescription}/>
              <Bankaccount title={bankaccountInfos[1].title} balance={bankaccountInfos[1].balance} balanceDescription={bankaccountInfos[1].balanceDescription}/>
              <Bankaccount title={bankaccountInfos[2].title} balance={bankaccountInfos[2].balance} balanceDescription={bankaccountInfos[2].balanceDescription}/>
          </main>
        </div>
      </div>
    );
  }
  
  export default User;