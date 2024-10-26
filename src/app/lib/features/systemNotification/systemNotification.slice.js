import { createSlice } from '@reduxjs/toolkit';
import { systemNotificationExtraReducer } from './systemNotification.extraReducer';

const initialState = {
  systemNotifications: [], // Single array for both system and personal notifications
  isLoading: false,
  error: null,
  isListening: false,
};

export const systemNotificationSlice = createSlice({
  name: 'systemNotifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.systemNotifications.unshift(action.payload); // Add both system and personal notifications
    },
    clearNotifications: (state) => {
      state.systemNotifications = [];
    },
  },
  extraReducers: systemNotificationExtraReducer,
});

// Export actions
export const { addNotification, clearNotifications } = systemNotificationSlice.actions;

// Export reducer
export default systemNotificationSlice.reducer;
