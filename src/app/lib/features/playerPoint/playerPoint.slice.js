import { createSlice } from '@reduxjs/toolkit'
import { playerPointExtraReducer } from './playerPoint.extraReducer'

const initialState = {
  playerPoint: [],
  isLoading: false,
  error: null,
}

export const playerPointSlice = createSlice({
  name: 'playerPoint',
  initialState,
  reducers: {},
  extraReducers: playerPointExtraReducer,
})

export const { setCurrentPlayerPoint } = playerPointSlice.actions

export default playerPointSlice.reducer
