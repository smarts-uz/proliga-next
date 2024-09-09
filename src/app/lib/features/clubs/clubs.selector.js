import { createDraftSafeSelector } from '@reduxjs/toolkit'

export const selectClubs = createDraftSafeSelector(
  (state) => state.clubs,
  (clubs) => clubs.clubs
)
