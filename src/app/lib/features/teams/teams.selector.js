import { createDraftSafeSelector } from '@reduxjs/toolkit'

export const selectTeams = createDraftSafeSelector(
  (state) => state.teams,
  (teams) => teams.teams
)
