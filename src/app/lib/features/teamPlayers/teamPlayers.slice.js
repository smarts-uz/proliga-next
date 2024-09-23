import { createSlice } from '@reduxjs/toolkit'
import {
  addTeamPlayerReducer,
  deleteTeamPlayerReducer,
  setCaptainReducer,
  revertTeamPlayersReducer,
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
  duplicatesMap: {},
  prevTeam: [],
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
    revertTeamPlayers: revertTeamPlayersReducer,
    emptyTeamPlayers: () => initialState,
  },
  extraReducers: teamPlayersExtraReducer,
})

export const {
  addTeamPlayer,
  deleteTeamPlayer,
  setCaptain,
  emptyTeamPlayers,
  revertTeamPlayers,
} = teamPlayersSlice.actions

export default teamPlayersSlice.reducer
