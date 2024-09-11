import { fetchTourTeam } from './tourTeam.thunk'

export const tourTeamExtraReducer = (builder) => {
  builder
    .addCase(fetchTourTeam.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchTourTeam.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data.length > 0) {
        state.tourTeam = action.payload.data[0]
      }
    })
    .addCase(fetchTourTeam.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
