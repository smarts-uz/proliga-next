import { createSlice } from '@reduxjs/toolkit'
import {
  addTeamPlayerReducer,
  deleteTeamPlayerReducer,
  setCaptainReducer,
  clearTeamPlayersReducer,
} from './teamPlayers.reducer'
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
  teamPrice: 0,
  existingClubs: [],
  duplicatesMap: {},
  error: null,
  isLoading: false,
}

const teamPlayersSlice = createSlice({
  name: 'teamPlayers',
  initialState,
  reducers: {
    addTeamPlayer: addTeamPlayerReducer,
    deleteTeamPlayer: deleteTeamPlayerReducer,
    setCaptain: setCaptainReducer,
    clearTeamPlayers: clearTeamPlayersReducer,
    emptyTeamPlayers: () => initialState,
  },
  extraReducers: teamPlayersExtraReducer,
})

export const {
  addTeamPlayer,
  deleteTeamPlayer,
  setCaptain,
  emptyTeamPlayers,
  clearTeamPlayers,
} = teamPlayersSlice.actions

export default teamPlayersSlice.reducer
