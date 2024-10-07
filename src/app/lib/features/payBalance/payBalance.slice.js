import { createSlice } from '@reduxjs/toolkit'
import { payBalanceExtraReducer } from './payBalance.extraReducer'

const initialState = {
  balance: [],
  isLoading: false,
  error: null,
}

const payBalanceSlice = createSlice({
  name: 'payBalance',
  initialState,
  extraReducers: payBalanceExtraReducer,
})

export default payBalanceSlice.reducer
