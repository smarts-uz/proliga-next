import {
  fetchSystemNotification,
  setupNotificationListener,
} from './systemNotification.thunk'

export const systemNotificationExtraReducer = (builder) => {
  builder
    .addCase(fetchSystemNotification.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchSystemNotification.fulfilled, (state, action) => {
      state.isLoading = false
      state.systemNotifications = []
      if (action.payload?.data.length > 0) {
        state.systemNotifications = action.payload.data
      }
    })
    .addCase(fetchSystemNotification.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload?.error ?? null
    })
    .addCase(setupNotificationListener.fulfilled, (state) => {
      state.isListening = true
    })
    .addCase(setupNotificationListener.rejected, (state, action) => {
      state.error = action.payload
    })
}
