import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  competition: [],
}

export const competitionSlice = createSlice({
  name: 'competition',
  initialState,
  reducers: {
    setCompetition: (state, action) => {
      state.competition = action.payload
    },
  },
})

export const { setCompetition } = competitionSlice.actions

export default competitionSlice.reducer
