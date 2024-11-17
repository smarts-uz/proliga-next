import { fetchSystemConfig } from './systemConfig.thunk'

export const systemConfigExtraReducer = (builder) => {
  builder
    .addCase(fetchSystemConfig.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchSystemConfig.fulfilled, (state, action) => {
      state.isLoading = false
      state.config = []
      if (action.payload.data?.length > 0) {
        state.config = action.payload.data
      }
    })
    .addCase(fetchSystemConfig.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
