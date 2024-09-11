import { fetchTourTeams } from './tourTeams.thunk'

export const tourTeamExtraReducer = (builder) => {
  builder
    .addCase(fetchTourTeams.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchTourTeams.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data.length > 0) {
        state.tourTeams = action.payload.data
      }
    })
    .addCase(fetchTourTeams.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
