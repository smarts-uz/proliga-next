import { fetchCompetition, fetchCompetitionStats } from './competition.thunk'

export const competitionExtraReducer = (builder) => {
  builder
    .addCase(fetchCompetition.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchCompetition.fulfilled, (state, action) => {
      state.isLoading = false
      state.competition = action.payload.data
    })
    .addCase(fetchCompetition.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
    .addCase(fetchCompetitionStats.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchCompetitionStats.fulfilled, (state, action) => {
      state.isLoading = false
      state.competitionStats = action.payload.data
    })
    .addCase(fetchCompetitionStats.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
