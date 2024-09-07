import { fetchPlayers } from './players.thunk'

export const playersExtraReducer = (builder) => {
  builder
    .addCase(fetchPlayers.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchPlayers.fulfilled, (state, action) => {
      state.isLoading = false
      state.players = action.payload.data
    })
    .addCase(fetchPlayers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
