import { fetchSystemNotification, setupNotificationListener } from "./systemNotification.thunk"

export const systemNotificationExtraReducer = (builder) => {
    builder
        .addCase(fetchSystemNotification.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchSystemNotification.fulfilled, (state, action) => {
            state.isLoading = false;
            state.systemNotifications = action.payload;
        })
        .addCase(fetchSystemNotification.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(setupNotificationListener.fulfilled, (state) => {
            state.isListening = true;
        })
        .addCase(setupNotificationListener.rejected, (state, action) => {
            state.error = action.payload;
        })
}