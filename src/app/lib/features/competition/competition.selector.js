import { createDraftSafeSelector } from '@reduxjs/toolkit'

export const selectCompetition = createDraftSafeSelector(
  (state) => state.competition,
  (competition) => competition.competition
)
