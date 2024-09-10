import { createSlice } from '@reduxjs/toolkit'
import { toursExtraReducer } from './tours.extraReducer'

const initialState = {
  tours: [],
  currentTour: 0,
  currentTourIndex: 0,
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
    },
  },
  extraReducers: toursExtraReducer,
})

export const { setCurrentTourIndex } = tourSlice.actions

export default tourSlice.reducer
