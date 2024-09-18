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
              if (
                !state.existingClubs[clubSlug] ||
                state.existingClubs[clubSlug] === 0
              ) {
                state.existingClubs[clubSlug] = 1
                return
              }
              state.existingClubs[clubSlug] += 1
            }
          }
          if (player.position === PLAYERS.DEF) {
            state.DEF.push(player)
            if (player.name) {
              state.playersCount.DEF++
              if (
                !state.existingClubs[clubSlug] ||
                state.existingClubs[clubSlug] === 0
              ) {
                state.existingClubs[clubSlug] = 1
                return
              }
              state.existingClubs[clubSlug] += 1
            }
          }
          if (player.position === PLAYERS.MID) {
            state.MID.push(player)
            if (player.name) {
              state.playersCount.MID++
              if (
                !state.existingClubs[clubSlug] ||
                state.existingClubs[clubSlug] === 0
              ) {
                state.existingClubs[clubSlug] = 1
                return
              }
              state.existingClubs[clubSlug] += 1
            }
          }
          if (player.position === PLAYERS.STR) {
            state.STR.push(player)
            if (player.name) {
              state.playersCount.STR++
              if (
                !state.existingClubs[clubSlug] ||
                state.existingClubs[clubSlug] === 0
              ) {
                state.existingClubs[clubSlug] = 1
                return
              }
              state.existingClubs[clubSlug] += 1
            }
          }
        })
      state.isLoading = false
    })
    .addCase(fetchTeamPlayers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
