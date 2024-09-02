import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  competition: [],
  games: [],
}

export const competitionSlice = createSlice({
  name: 'competition',
  initialState,
  reducers: {
    setCompetition: (state, action) => {
      state.competition = action.payload
    },
    addGame: (state, action) => {
      state.games.push(action.payload)
    },
  },
})

export const { setCompetition, addGame } = competitionSlice.actions

export default competitionSlice.reducer
