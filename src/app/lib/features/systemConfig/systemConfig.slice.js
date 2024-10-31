import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'none',
}

const systemConfigSlice = createSlice({
  name: 'systemConfig',
  initialState,
  reducers: {
    setSystemConfig: (state, action) => {
      state.value = action.payload
    },
  },
})

export default systemConfigSlice.reducer
