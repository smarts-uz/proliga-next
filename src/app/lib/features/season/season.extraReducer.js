import { fetchSeason } from './season.thunk'

export const seasonExtraReducer = (builder) => {
  builder
    .addCase(fetchSeason.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchSeason.fulfilled, (state, action) => {
      state.isLoading = false
      if (!action.payload.data) {
        return state
      }
      state.season = action.payload.data[0]
    })
    .addCase(fetchSeason.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
