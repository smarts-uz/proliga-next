import { fetchCurrentTeam, fetchSelectedTeam } from './currentTeam.thunk'

export const currentTeamExtraReducer = (builder) => {
  builder
    .addCase(fetchCurrentTeam.pending, (state) => {
      state.isLoading = true
      state.currentTeam = {}
    })
    .addCase(fetchCurrentTeam.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data?.length > 0) {
        state.currentTeam = action.payload.data[0]
      }
    })
    .addCase(fetchCurrentTeam.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
    .addCase(fetchSelectedTeam.pending, (state) => {
      state.isLoading = true
      state.currentTeam = {}
    })
    .addCase(fetchSelectedTeam.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data?.length > 0) {
        state.currentTeam = action.payload.data[0]
      }
    })
    .addCase(fetchSelectedTeam.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
