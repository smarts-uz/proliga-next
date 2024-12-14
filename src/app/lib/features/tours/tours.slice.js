import { createSlice } from '@reduxjs/toolkit'
import { toursExtraReducer } from './tours.extraReducer'
import { TABS } from 'app/utils/tabs.util'
import { TOUR } from 'app/utils/tour.util'

const initialState = {
  tours: [],
  currentTour: 0,
  currentTourIndex: 0,
  gameTab: TABS.GameProfile,
  registeredTour: {},
  error: null,
  isLoading: false,
}

export const tourSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    setCurrentTourIndex: (state, action) => {
      state.currentTour = state.tours[action.payload]
      state.currentTourIndex = action.payload
      if (
        state.gameTab === TABS.Transfer &&
        state.currentTour.status !== TOUR.notStartedTransfer
      ) {
        state.gameTab = TABS.GameProfile
      }
    },
    setTab: (state, action) => {
      console.log(action.payload)
      state.gameTab = action.payload
    },
  },
  extraReducers: toursExtraReducer,
})

export const { setCurrentTourIndex, setTab } = tourSlice.actions

export default tourSlice.reducer
