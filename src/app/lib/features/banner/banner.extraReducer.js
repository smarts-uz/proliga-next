import { fetchBanners } from './banner.thunk'

export const bannerExtraReducer = (builder) => {
  builder
    .addCase(fetchBanners.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchBanners.fulfilled, (state, action) => {
      state.isLoading = false
      state.banners = []
      if (action.payload.data?.length > 0) {
        state.banners = action.payload.data
      }
    })
    .addCase(fetchBanners.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error?.message ?? null
    })
}
