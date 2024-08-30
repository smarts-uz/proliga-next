import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  players: [],
}

export const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload
    },
  },
})

export const { setPlayers, setPagination } = transferSlice.actions

export default transferSlice.reducer
