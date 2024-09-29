import { fetchPlayerPoint } from './playerPoint.thunk'

export const playerPointExtraReducer = (builder) => {
  builder
    .addCase(fetchPlayerPoint.pending, (state) => {
      state.isLoading = true
      state.playerPoint = []
    })
    .addCase(fetchPlayerPoint.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload?.data?.length > 0) {
        state.playerPoint = action.payload.data
      }
    })
    .addCase(fetchPlayerPoint.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
