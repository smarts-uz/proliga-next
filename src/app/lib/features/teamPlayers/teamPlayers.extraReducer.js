import { fetchTeamPlayers } from './teamPlayers.thunk'
import { PLAYERS } from 'app/utils/players.util'

export const teamPlayersExtraReducer = (builder) => {
  builder
    .addCase(fetchTeamPlayers.pending, (state) => {
      state.isLoading = true
      state.GOA = []
      state.playersCount.GOA = 0
      state.DEF = []
      state.playersCount.DEF = 0
      state.MID = []
      state.playersCount.MID = 0
      state.STR = []
      state.playersCount.STR = 0
    })
    .addCase(fetchTeamPlayers.fulfilled, (state, action) => {
      const team = action.payload.data
      team?.length > 0 && (state.prevTeam = team)
      team?.length > 0 &&
        team.forEach((player) => {
          const clubSlug = player?.club_id?.id ?? ''

          if (player.position === PLAYERS.GOA) {
            state.GOA.push(player)
            if (player.name) {
              state.playersCount.GOA++
              state.duplicatesMap[clubSlug] =
                (state.duplicatesMap[clubSlug] || 0) + 1
            }
          }
          if (player.position === PLAYERS.DEF) {
            state.DEF.push(player)
            if (player.name) {
              state.playersCount.DEF++
              state.duplicatesMap[clubSlug] =
                (state.duplicatesMap[clubSlug] || 0) + 1
            }
          }
          if (player.position === PLAYERS.MID) {
            state.MID.push(player)
            if (player.name) {
              state.playersCount.MID++
              state.duplicatesMap[clubSlug] =
                (state.duplicatesMap[clubSlug] || 0) + 1
            }
          }
          if (player.position === PLAYERS.STR) {
            state.STR.push(player)
            if (player.name) {
              state.playersCount.STR++
              state.duplicatesMap[clubSlug] =
                (state.duplicatesMap[clubSlug] || 0) + 1
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
