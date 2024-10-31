import {
  setupNotificationListener,
  fetchAllNotifications,
} from './systemNotification.thunk'

export const systemNotificationExtraReducer = (builder) => {
  builder
    .addCase(fetchAllNotifications.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchAllNotifications.fulfilled, (state, action) => {
      state.isLoading = false
      state.systemNotifications = action.payload?.data ?? []
    })
    .addCase(fetchAllNotifications.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error
    })
    .addCase(setupNotificationListener.fulfilled, (state) => {
      state.isListening = true
    })
    .addCase(setupNotificationListener.rejected, (state, action) => {
      state.error = action.payload?.error
    })
}
