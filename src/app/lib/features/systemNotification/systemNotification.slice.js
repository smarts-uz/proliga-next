import { createSlice } from '@reduxjs/toolkit'
import { systemNotificationExtraReducer } from './systemNotification.extraReducer'

const initialState = {
  systemNotifications: [],
  isLoading: false,
  error: null,
  isListening: false,
}

export const systemNotificationSlice = createSlice({
  name: 'systemNotifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.systemNotifications.unshift(action.payload)
    },
    clearNotifications: (state) => {
      state.systemNotifications = []
    },
  },
  extraReducers: systemNotificationExtraReducer,
})

export const { addNotification, clearNotifications } =
  systemNotificationSlice.actions

export default systemNotificationSlice.reducer
