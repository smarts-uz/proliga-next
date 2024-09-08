import { createSlice } from '@reduxjs/toolkit'
import { competitionExtraReducer } from './competition.extraReducer'

const initialState = {
  competition: [],
  error: null,
  isLoading: false,
}

export const competitionSlice = createSlice({
  name: 'competition',
  initialState,
  reducers: {
    setCompetition: (state, action) => {
      state.competition = action.payload
    },
  },
  extraReducers: competitionExtraReducer,
})

export const { setCompetition } = competitionSlice.actions

export default competitionSlice.reducer
