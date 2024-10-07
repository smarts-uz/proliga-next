import { createSlice } from "@reduxjs/toolkit";
import { systemNotificationExtraReducer } from "./systemNotification.extraReducer";

const initialState = {
    systemNotifications: [],
    isLoading: false,
    error: null,
    isListening: false,
    isLoaded: false,
};
// arr?.length > 0
export const systemNotificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action) => {
          state.notifications.push(action.payload);
        },
      },
    extraReducers: systemNotificationExtraReducer,
})

export const { addNotification } = systemNotificationSlice.actions;
export default systemNotificationSlice.reducer


