import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'

const initialState = {
  team: null,
  competition: null,
  tour: null,
  tab: tabs.Transfer,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload
    },
    setCompetition: (state, action) => {
      state.competition = action.payload
    },
    setTour: (state, action) => {
      state.tour = action.payload
    },
    setTab: (state, action) => {
      state.tab = action.payload
    },
  },
})

export const { setTeam, setCompetition, setTour, setTab } = gameSlice.actions

export default gameSlice.reducer
