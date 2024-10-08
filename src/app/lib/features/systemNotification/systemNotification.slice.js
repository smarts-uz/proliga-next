import { createSlice } from "@reduxjs/toolkit";
import { systemNotificationExtraReducer } from "./systemNotification.extraReducer";

const initialState = {
    systemNotifications: [],
    isLoading: false,
    error: null,
    isListening: false,
};
// arr?.length > 0
export const systemNotificationSlice = createSlice({
    name: 'systemNotifications',
    initialState,
    reducers: {
        addNotification: (state, action) => {
          state.systemNotifications.push(action.payload);
        },
      },
    extraReducers: systemNotificationExtraReducer,
})

export const { addNotification } = systemNotificationSlice.actions;
export default systemNotificationSlice.reducer


