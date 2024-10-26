import {
  fetchSystemNotification,
  fetchPersonalNotification, // Import the personal notification thunk
  setupNotificationListener,
  fetchAllNotifications,
} from './systemNotification.thunk';

export const systemNotificationExtraReducer = (builder) => {
  builder
  .addCase(fetchAllNotifications.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(fetchAllNotifications.fulfilled, (state, action) => {
    state.isLoading = false;
    state.systemNotifications = action.payload.data; // Store all notifications
  })
  .addCase(fetchAllNotifications.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })

  // Handle setupNotificationListener cases
  .addCase(setupNotificationListener.fulfilled, (state) => {
    state.isListening = true;
  })
  .addCase(setupNotificationListener.rejected, (state, action) => {
    state.error = action.payload;
  });
};
