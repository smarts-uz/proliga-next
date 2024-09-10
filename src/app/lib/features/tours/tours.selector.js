import { createDraftSafeSelector } from '@reduxjs/toolkit'

export const selectTours = createDraftSafeSelector(
  (state) => state.tours,
  (tours) => tours.tours
)
