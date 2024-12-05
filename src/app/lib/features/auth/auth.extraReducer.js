import { fetchGeo } from './auth.thunk'

export const authExtraReducer = (builder) => {
  builder
    .addCase(fetchGeo.pending, (state) => {
      state.geoLoading = true
    })
    .addCase(fetchGeo.fulfilled, (state, action) => {
      state.geoLoading = false
      state.geo = action.payload.data ?? null
    })
    .addCase(fetchGeo.rejected, (state, action) => {
      state.geoLoading = false
      state.geoError = action.payload.data.message ?? null
    })
}
