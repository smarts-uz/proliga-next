import { fetchClubs } from './clubs.thunk'

export const clubsExtraReducer = (builder) => {
  builder
    .addCase(fetchClubs.pending, (state) => {
      state.isLoading = true
      state.clubs = []
    })
    .addCase(fetchClubs.fulfilled, (state, action) => {
      state.isLoading = false
      state.clubs = action.payload.data
    })
    .addCase(fetchClubs.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
