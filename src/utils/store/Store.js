import { configureStore } from '@reduxjs/toolkit'
import profileReducer from '../../pages/features/Profile/profileSlice.js'
import loginReducer from '../../pages/features/token/tokenSlice.js'

// export const initialState = {
//   token: null,
//   username: null,
//   error: '',
//   loading: false
// }

export default configureStore({
  reducer: {
    profile: profileReducer,
    token: loginReducer
  }
});