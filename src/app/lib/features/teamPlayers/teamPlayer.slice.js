import { createSlice } from '@reduxjs/toolkit'
import {
  addTeamPlayerReducer,
  deleteTeamPlayerReducer,
} from './teamPlayer.reducer'
import { teamPlayersExtraReducer } from './teamPlayers.extraReducer'

const initialState = {
  GOA: [],
  DEF: [],
  MID: [],
  STR: [],
  playersCount: {
    GOA: 0,
    DEF: 0,
    MID: 0,
    STR: 0,
  },
  error: null,
  isLoading: false,
}

const teamPlayersSlice = createSlice({
  name: 'teamPlayers',
  initialState,
  reducers: {
    addTeamPlayer: addTeamPlayerReducer,
    deleteTeamPlayer: deleteTeamPlayerReducer,
  },
  extraReducers: teamPlayersExtraReducer
})

export const { addTeamPlayer, deleteTeamPlayer } = teamPlayersSlice.actions

export default teamPlayersSlice.reducer
