import { fetchNews } from './news.thunk'

export const newsExtraReducer = (builder) => {
  builder
    .addCase(fetchNews.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.data?.length > 0) {
        state.news = action.payload.data
      }
    })
    .addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload.error?.message ?? null
    })
}
