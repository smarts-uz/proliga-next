import { fetchPrizes } from './prize.thunk'

export const prizesExtraReducer = (builder) => {
  builder
    .addCase(fetchPrizes.pending, (state) => {
      state.isLoading = true
      state.prizes = []
    })
    .addCase(fetchPrizes.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data?.length > 0) {
        state.prizes = action.payload.data
      }
    })
    .addCase(fetchPrizes.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
