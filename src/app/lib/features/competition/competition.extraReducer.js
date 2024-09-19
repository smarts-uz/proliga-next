import { fetchCompetition, fetchCompetitionStats } from './competition.thunk'

export const competitionExtraReducer = (builder) => {
  builder
    .addCase(fetchCompetition.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchCompetition.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data?.length > 0) {
        state.competition = action.payload.data
      }
    })
    .addCase(fetchCompetition.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
