import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerPoint: [],
  isLoading: false,
  error: null,
}

export const playerPointSlice = createSlice({
  name: 'playerPoint',
  initialState,
  reducers: {},
  extraReducers: playersExtraReducer,
})

export const {} = playerPointSlice.actions

export default playerPointSlice.reducer
