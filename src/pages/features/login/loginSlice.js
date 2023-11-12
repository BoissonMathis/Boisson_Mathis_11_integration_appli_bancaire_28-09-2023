import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const postLogin = createAsyncThunk('login/postLogin',async(obj) =>{

  const response = await fetch('http://localhost:3001/api/v1/user/login', {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json',
  },
  })
  .then((response) => response.json())

  if(response.status === 200){
    return response.body.token
  }
})

const loginSlice = createSlice({
  name: 'login',
  initialState: {
      token: null,
      error: '',
      loading: false,
      authenticated: false
    },
  reducers:{
    logOut: state => {
      state.authenticated = false
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(postLogin.pending,(state)=>{
      state.loading=true
    })
    builder.addCase(postLogin.fulfilled,(state,action)=>{
      state.loading=false
      state.token=action.payload
      if(action.payload !== undefined){
        state.authenticated=true
      }
      else{
        state.error="e-mail ou mdp incorrect"
      }
    })
    builder.addCase(postLogin.rejected,(state,action)=>{
      state.loading=false
      state.error=action.error.message
    })
  }
});

export default loginSlice.reducer;

export const {logOut} = loginSlice.actions
