import { createSlice } from '@reduxjs/toolkit'

const storedUserInfo = localStorage.getItem('userInfo')
const parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null

const initialState = {
  userInfo: typeof parsedUserInfo === 'object' ? parsedUserInfo : null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    }
  }
})

// export setCredentials as an action
export const { setCredentials, logout } = authSlice.actions 

export default authSlice.reducer
