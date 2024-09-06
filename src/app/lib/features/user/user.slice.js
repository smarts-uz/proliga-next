import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  middleName: null,
  phone: null,
  createdAt: null,
  updatedAt: null,
  notification: [],
  photo: null,
  maritalStatus: null,
  gender: null,
  dateOfBirth: null,
  city: null,
  country: null,
  education: null,
  profession: null,
  about: null,
  isPhoneVerified: false,
  isEmailVerified: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

// export const { }  = authSlice.actions

export default userSlice.reducer
