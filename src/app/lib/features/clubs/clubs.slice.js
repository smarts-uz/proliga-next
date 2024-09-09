import { createSlice } from '@reduxjs/toolkit'
import { clubsExtraReducer } from './clubs.extraReducer'

const initialState = {
  clubs: [],
  isLoading: false,
  error: null,
}

const clubsSlice = createSlice({
  name: 'clubs',
  initialState,
  reducers: {},
  extraReducers: clubsExtraReducer,
})

export default clubsSlice.reducer
