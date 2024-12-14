import {
  fetchPlayers,
  fetchTopPlayers,
  fetchAdditionalPlayers,
} from './players.thunk'

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
      state.error = action.payload?.error?.message ?? null
    })
    .addCase(fetchAdditionalPlayers.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchAdditionalPlayers.fulfilled, (state, action) => {
      state.isLoading = false
      const threshold = action?.payload?.page ?? 1000

      if (state.players.length > threshold - 1) {
        state.players = [...state.players, ...action.payload?.data]
      }
    })
    .addCase(fetchAdditionalPlayers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
    .addCase(fetchTopPlayers.pending, (state) => {
      state.topPlayersLoading = true
    })
    .addCase(fetchTopPlayers.fulfilled, (state, action) => {
      state.topPlayersLoading = false
      state.topPlayers = []

      const players = action.payload?.data ?? []
      players.map((pl) => {
        let player = state.players.find((p) => p.id === pl)
        if (players.length > 2) return
        state.topPlayers.push(player)
      })
    })
    .addCase(fetchTopPlayers.rejected, (state, action) => {
      state.topPlayersLoading = false
      state.topPlayersError = action.payload?.error?.message ?? null
    })
}
