import { createSlice } from '@reduxjs/toolkit'
import { tourTeamExtraReducer } from './tourTeam.extraReducer'

const initialState = {
  tourTeam: {},
  isLoading: false,
  error: null,
}

const tourTeamSlice = createSlice({
  name: 'tourTeam',
  initialState,
  reducers: {
    setTourTeam: (state, action) => {
      state.tourTeam = action.payload
    },
  },
  extraReducers: tourTeamExtraReducer,
})



export default tourTeamSlice.reducer
