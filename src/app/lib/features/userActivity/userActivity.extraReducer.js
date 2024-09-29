import { fetchUserActivity } from './userActivity.thunk'

export const userActivityExtraReducer = (builder) => {
  builder
    .addCase(fetchUserActivity.pending, (state) => {
      state.isLoading = true
      state.activities = []
    })
    .addCase(fetchUserActivity.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data.length > 0) {
        state.activities = action.payload.data
      }
    })
    .addCase(fetchUserActivity.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error.message ?? null
    })
}
