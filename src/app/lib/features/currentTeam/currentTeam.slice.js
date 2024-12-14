import { createSlice } from '@reduxjs/toolkit'
import { currentTeamExtraReducer } from './currentTeam.extraReducer'

const initialState = {
  currentTeam: {},
  lastVisitedTeam: '',
  balanceModal: false,
  transferModal: false,
  isLoading: false,
  error: null,
}

const currentTeamSlice = createSlice({
  name: 'currentTeam',
  initialState,
  reducers: {
    setLastVisitedTeam: (state, action) => {
      state.lastVisitedTeam = action.payload
    },
    setIsTeamCreated: (state, action) => {
      state.currentTeam.is_team_created = action.payload
    },
    setBalanceModal: (state, action) => {
      state.balanceModal = action.payload
    },
    setTransferModal: (state, action) => {
      state.transferModal = action.payload
    },
    resetCurrentTeam: () => initialState,
  },
  extraReducers: currentTeamExtraReducer,
})

export const {
  setLastVisitedTeam,
  setIsTeamCreated,
  setBalanceModal,
  setTransferModal,
  resetCurrentTeam,
} = currentTeamSlice.actions

export default currentTeamSlice.reducer
