import { createSlice } from '@reduxjs/toolkit'
import { systemConfigExtraReducer } from './systemConfig.extraReducer'

const initialState = {
  config: {},
  isLoading: false,
  error: null,
}

const systemConfigSlice = createSlice({
  name: 'systemConfig',
  initialState,
  reducers: {
    setSystemConfig: (state, action) => {
      state.value = action.payload
    },
  },
  extraReducers: systemConfigExtraReducer,
})

export default systemConfigSlice.reducer
