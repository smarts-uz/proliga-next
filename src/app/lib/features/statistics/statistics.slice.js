import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  statistics: [],
}

const gameSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStats: (state, action) => {
      state.game = action.payload
    },
  },
})

export default gameSlice.reducer
