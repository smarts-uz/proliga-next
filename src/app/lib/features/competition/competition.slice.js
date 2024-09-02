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
    setGame: (state, action) => {
      state.games = action.payload
    },
  },
})

export const { setCompetition, addGame, setGame } = competitionSlice.actions

export default competitionSlice.reducer
