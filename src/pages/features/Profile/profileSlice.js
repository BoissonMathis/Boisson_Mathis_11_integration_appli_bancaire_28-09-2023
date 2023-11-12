import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProfile = createAsyncThunk('profile/postProfile',async( obj )=>{
  
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'POST',
  headers: {
    "Authorization": `Bearer ${obj.token}`
  }
  }).then((response) => response.json())

  const profile = [];
  profile.push(
    response.body.userName, 
    response.body.firstName, 
    response.body.lastName
    )
  return profile
})

export const editUserName = createAsyncThunk('userUsername/editUserName',async( obj )=>{
  
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'PUT',
  body: JSON.stringify({
    "userName": obj.userName
  }),
  headers: {
    "Content-Type" : "application/json",
    "Authorization": `Bearer ${obj.token}`
  }
  }).then((response) => response.json())

  return response.body.userName
})

export const profileSlice = createSlice ({
  name: 'profile',
  initialState: {
      userName: '',
      firstName: '',
      lastName: '',
      error: '',
      loading: false
    },
  reducers: {
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProfile.pending,(state)=>{
      state.loading=true
    })
    builder.addCase(fetchProfile.fulfilled,(state,action)=>{
      state.loading=false
      state.userName=action.payload[0]
      state.firstName=action.payload[1]
      state.lastName=action.payload[2]
    })
    builder.addCase(fetchProfile.rejected,(state,action)=>{
      state.loading=false
      state.error=action.error.message
    })
    builder.addCase(editUserName.pending,(state)=>{
      state.loading=true
    })
    builder.addCase(editUserName.fulfilled,(state,action)=>{
      state.loading=false
      state.userName=action.payload
    })
    builder.addCase(editUserName.rejected,(state,action)=>{
      state.loading=false
      state.error=action.error.message
    })
  }
})

export default profileSlice.reducer
