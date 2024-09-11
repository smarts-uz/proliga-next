import { createSlice } from '@reduxjs/toolkit'
import { competitionExtraReducer } from './competition.extraReducer'

const initialState = {
  competition: [],
  currentCompetition: {},
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
    setCurrentCompetition: (state, action) => {
      const competition =
        state.competition.find((item) => item.slug === action.payload) ?? {}
      state.currentCompetition = competition
    },
  },
  extraReducers: competitionExtraReducer,
})

export const { setCompetition, setCurrentCompetition } =
  competitionSlice.actions

export default competitionSlice.reducer
