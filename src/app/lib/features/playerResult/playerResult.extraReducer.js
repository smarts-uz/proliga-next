import { fetchPlayerResult } from './playerResult.thunk'

export const playerResultExtraReducer = (builder) => {
  builder
    .addCase(fetchPlayerResult.pending, (state) => {
      state.isLoading = true
      state.players = []
    })
    .addCase(fetchPlayerResult.fulfilled, (state, action) => {
      state.isLoading = false
      state.players = action.payload.data
    })
    .addCase(fetchPlayerResult.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
