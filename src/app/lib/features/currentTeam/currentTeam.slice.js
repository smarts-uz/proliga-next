import { createSlice } from '@reduxjs/toolkit'
import { currentTeamExtraReducer } from './currentTeam.extraReducer'

const initialState = {
  currentTeam: {},
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
  },
  extraReducers: currentTeamExtraReducer,
})

export const { setCurrentTeamCreated } = currentTeamSlice.actions

export default currentTeamSlice.reducer
