import { fetchTeams } from './teams.thunk'

export const teamsExtraReducer = (builder) => {
  builder
    .addCase(fetchTeams.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchTeams.fulfilled, (state, action) => {
      state.isLoading = false
      state.teams = action.payload.data
    })
    .addCase(fetchTeams.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
