import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "app/lib/supabaseClient";
import { addNotification } from "./systemNotification.slice";

export const fetchSystemNotification = createAsyncThunk(
  'systemNotification/fetchSystemNotification',
  async ({ userId, isLoaded }) => {
    if (isLoaded) return;

    try {
      const { data, error } = await supabase
        .from('system_notification')
        .select('*')
        .or(`is_broadcast.eq.true,user_id.eq.${userId}`);

      if (error) {
        console.error('Error fetching notifications:', error);
        return null;  // Return null in case of error instead of rejecting
      }

      console.log('Fetched notifications:', data);
      return data;  // Return the fetched notifications
    } catch (error) {
      console.error('Error during fetchSystemNotification:', error);
      return null;  // Handle the error and return null
    }
  }
);


export const setupNotificationListener = createAsyncThunk(
    'systemNotification/setupNotificationListener',
    async (userId, { dispatch, getState }) => {
      const { isListening } = getState().systemNotifications;
      if (isListening) return;
  
      try {
        const channel = supabase
          .channel('public:system_notification')
          .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'system_notification' }, (payload) => {
            const { name, desc, is_broadcast, user_id } = payload.new;
  
            if (is_broadcast || user_id === userId) {
              dispatch(addNotification({ name, desc }));  // Dispatch the notification to add it
            }
          })
          .subscribe();
  
        return channel;
      } catch (error) {
        console.error('Error setting up notification listener:', error);
        return null;  // Return null instead of rejecting
      }
    }
  );
  