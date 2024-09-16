import { createSlice } from '@reduxjs/toolkit'
import {
  addTeamPlayerReducer,
  deleteTeamPlayerReducer,
  setCaptainReducer,
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
  existingClubs: {},
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
    emptyTeamPlayers: () => initialState,
  },
  extraReducers: teamPlayersExtraReducer,
})

export const { addTeamPlayer, deleteTeamPlayer, setCaptain, emptyTeamPlayers } =
  teamPlayersSlice.actions

export default teamPlayersSlice.reducer
