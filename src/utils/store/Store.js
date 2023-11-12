import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../../pages/features/Profile/profileSlice.js'
import loginReducer from '../../pages/features/token/tokenSlice.js'

export default configureStore({
  reducer: {
    profile: profileReducer,
    token: loginReducer
  }
});