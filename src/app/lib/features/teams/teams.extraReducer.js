import { fetchUserTeams, fetchAllTeams, fetchTopTeams } from './teams.thunk'

export const teamsExtraReducer = (builder) => {
  builder
    .addCase(fetchUserTeams.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchUserTeams.fulfilled, (state, action) => {
      state.isLoading = false
      state.teams = action.payload.data
    })
    .addCase(fetchUserTeams.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
    .addCase(fetchAllTeams.pending, (state) => {
      state.teamsLoading = true
      state.allTeams = []
    })
    .addCase(fetchAllTeams.fulfilled, (state, action) => {
      state.teamsLoading = false
      if (action.payload.data?.length > 0) {
        state.allTeams = action.payload.data
      }
    })
    .addCase(fetchAllTeams.rejected, (state, action) => {
      state.teamsLoading = false
      state.teamsError = action.payload.error.message ?? null
    })
    .addCase(fetchTopTeams.pending, (state) => {
      state.topTeamsLoading = true
      state.topTeams = []
    })
    .addCase(fetchTopTeams.fulfilled, (state, action) => {
      state.topTeamsLoading = false
      if (action.payload.data?.length > 0) {
        state.topTeams = action.payload.data.reverse()
      }
    })
    .addCase(fetchTopTeams.rejected, (state, action) => {
      state.topTeamsLoading = false
      state.topTeamsError = action.payload?.error?.message ?? null
    })
}
