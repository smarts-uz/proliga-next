import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  statistics: [],
}

const gameSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStatistics: (state, action) => {
      state.statistics = action.payload
    },
  },
})

export const { setStatistics } = gameSlice.actions

export default gameSlice.reducer
