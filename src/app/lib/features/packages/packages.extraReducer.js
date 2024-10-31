import { fetchPackages } from './packages.thunk'

export const packagesExtraReducer = (builder) => {
  builder
    .addCase(fetchPackages.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchPackages.fulfilled, (state, action) => {
      state.isLoading = false
      state.packages = []
      if (action.payload.data?.length > 0) {
        state.packages = action.payload.data
      }
    })
    .addCase(fetchPackages.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
