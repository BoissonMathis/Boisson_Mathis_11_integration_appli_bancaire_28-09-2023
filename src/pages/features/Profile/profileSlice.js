import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { useSelector } from 'react-redux'

export const fetchProfile = createAsyncThunk('profile/postProfile',async( obj )=>{
  
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
  method: 'POST',
  // body: JSON.stringify(obj.token),
  headers: {
    "Authorization": `Bearer ${obj.token}`
  }
  }).then((response) => response.json())

  // console.log(response.body)
  console.log(response)

  const profile = [];
  profile.push(response.body.userName, 
    response.body.firstName, 
    response.body.lastName)
  console.log(profile)

  // return response.body.userName
  return profile
})

export const editUserName = createAsyncThunk('userUsername/editUserName',async( obj )=>{

  // console.log('obj: ' + obj)
  // console.log('username obj: ' + obj.userName)
  
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

  // console.log(response.body)
  console.log(response)
  console.log(response.body)

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
      // console.log('action payload: ' + action.payload)
      // console.log("firstName: " + state.firstName)
      // console.log("lastName: " + state.lastName)
      // console.log('username: ' + state.value)
      // if(action.payload===null){
      //   console.log('champ vide')
      // }
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
      console.log('action payload: ' + action.payload)
      console.log('username: ' + state.userName)
    })
    builder.addCase(editUserName.rejected,(state,action)=>{
      state.loading=false
      state.error=action.error.message
    })
  }
})

// export const { editUsername } = usernameSlice.actions
// export const { editProfile } = nameSlice.actions

export default profileSlice.reducer

// export const { getUsername } = usernameSlice.actions

// export const getLogin = (state) => state.postReducer.post;
// export const getLoading = (state) => state.postReducer.loading;