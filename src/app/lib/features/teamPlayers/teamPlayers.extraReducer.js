import { fetchTeamPlayers } from './teamPlayers.thunk'
import { PLAYERS } from 'app/utils/players.util'

export const teamPlayersExtraReducer = (builder) => {
  builder
    .addCase(fetchTeamPlayers.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchTeamPlayers.fulfilled, (state, action) => {
      state.GOA = []
      state.playersCount.GOA = 0
      state.DEF = []
      state.playersCount.DEF = 0
      state.MID = []
      state.playersCount.MID = 0
      state.STR = []
      state.playersCount.STR = 0

      const team = action.payload.data
      team?.length > 0 &&
        team.forEach((player) => {
          const clubSlug = player?.club_id?.slug ?? ''

          if (player.position === PLAYERS.GOA) {
            state.GOA.push(player)
            if (player.name) {
              state.playersCount.GOA++
              state.existingClubs.push(clubSlug)
            }
          }
          if (player.position === PLAYERS.DEF) {
            state.DEF.push(player)
            if (player.name) {
              state.playersCount.DEF++
              state.existingClubs.push(clubSlug)
            }
          }
          if (player.position === PLAYERS.MID) {
            state.MID.push(player)
            if (player.name) {
              state.playersCount.MID++
              state.existingClubs.push(clubSlug)
            }
          }
          if (player.position === PLAYERS.STR) {
            state.STR.push(player)
            if (player.name) {
              state.playersCount.STR++
              state.existingClubs.push(clubSlug)
            }
          }
        })

      state.teamPrice =
        state.GOA.reduce((acc, player) => acc + player.price, 0) +
        state.DEF.reduce((acc, player) => acc + player.price, 0) +
        state.MID.reduce((acc, player) => acc + player.price, 0) +
        state.STR.reduce((acc, player) => acc + player.price, 0)

      state.isLoading = false
    })
    .addCase(fetchTeamPlayers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
