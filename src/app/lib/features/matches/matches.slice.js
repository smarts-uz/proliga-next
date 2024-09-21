import { createSlice } from '@reduxjs/toolkit'
import { matchesExtraReducer } from './matches.extraReducer'

const initialState = {
  matches: [],
  tourIndex: 0,
  isLoading: false,
  error: null,
}

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setMatchesTourIndex: (state, action) => {
      state.tourIndex = action.payload
    },
  },
  extraReducers: matchesExtraReducer,
})

export const { setMatchesTourIndex } = matchesSlice.actions

export default matchesSlice.reducer
