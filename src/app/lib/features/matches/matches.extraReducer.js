import { fetchMatches } from './mathes.thunk'

export const matchesExtraReducer = (builder) => {
  builder
    .addCase(fetchMatches.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchMatches.fulfilled, (state, action) => {
      state.isLoading = false
      state.matches = []
      if (action.payload.data?.length > 0) {
        state.matches = action.payload.data
      }
    })
    .addCase(fetchMatches.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
