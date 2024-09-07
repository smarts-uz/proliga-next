import { createDraftSafeSelector } from '@reduxjs/toolkit'

export const selectPlayers = createDraftSafeSelector(
  (state) => state.players,
  (players) => players.players
)
