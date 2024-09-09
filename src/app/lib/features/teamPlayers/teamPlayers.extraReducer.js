import { fetchTeamPlayers } from './teamPlayers.thunk'
import { PLAYERS } from 'app/utils/players.util'

export const teamPlayersExtraReducer = (builder) => {
  builder
    .addCase(fetchTeamPlayers.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchTeamPlayers.fulfilled, (state, action) => {
      state.isLoading = false
      const team = action.payload.data
      team.forEach((player) => {
        if (player.position === PLAYERS.GOA) {
          state.GOA.push(player)
          if (player.name) {
            state.playersCount.GOA++
          }
        }
        if (player.position === PLAYERS.DEF) {
          state.DEF.push(player)
          if (player.name) {
            state.playersCount.DEF++
          }
        }
        if (player.position === PLAYERS.MID) {
          state.MID.push(player)
          if (player.name) {
            state.playersCount.MID++
          }
        }
        if (player.position === PLAYERS.STR) {
          state.STR.push(player)
          if (player.name) {
            state.playersCount.STR++
          }
        }
      })
    })
    .addCase(fetchTeamPlayers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
