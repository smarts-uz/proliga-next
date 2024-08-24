import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './features/auth/auth.slice.js'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
})

export default store
