import { createSlice } from '@reduxjs/toolkit'
import { currentTeamExtraReducer } from './currentTeam.extraReducer'

const initialState = {
  currentTeam: {},
  lastVisitedTeam: '',
  isLoading: false,
  error: null,
}

const currentTeamSlice = createSlice({
  name: 'currentTeam',
  initialState,
  reducers: {
    setCurrentTeamCreated: (state, action) => {
      state.currentTeam.is_team_created = action.payload
    },
    setLastVisitedTeam: (state, action) => {
      state.lastVisitedTeam = action.payload
    },
  },
  extraReducers: currentTeamExtraReducer,
})

export const { setCurrentTeamCreated, setLastVisitedTeam } = currentTeamSlice.actions

export default currentTeamSlice.reducer
