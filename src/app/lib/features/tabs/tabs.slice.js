import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTab: null

}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

// export const { }  = authSlice.actions

export default userSlice.reducer
