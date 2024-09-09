import { fetchCurrentTeam } from "./currentTeam.thunk"

export const currentTeamExtraReducer = (builder) => {
  builder
    .addCase(fetchCurrentTeam.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchCurrentTeam.fulfilled, (state, action) => {
      state.isLoading = false
      state.currentTeam = action.payload.data[0]
    })
    .addCase(fetchCurrentTeam.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
