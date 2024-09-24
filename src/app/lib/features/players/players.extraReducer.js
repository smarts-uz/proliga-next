import { fetchPlayers, fetchTopPlayers } from './players.thunk'

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
    .addCase(fetchTopPlayers.pending, (state) => {
      state.topPlayersLoading = true
    })
    .addCase(fetchTopPlayers.fulfilled, (state, action) => {
      state.topPlayersLoading = false
      state.topPlayers = action.payload.data
    })
    .addCase(fetchTopPlayers.rejected, (state, action) => {
      state.topPlayersLoading = false
      state.topPlayersError = action.payload.error.message ?? null
    })
}
