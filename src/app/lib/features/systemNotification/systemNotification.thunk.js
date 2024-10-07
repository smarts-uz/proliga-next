import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "app/lib/supabaseClient";

export const fetchSystemNotification = createAsyncThunk(
    'systemNotification/fetchSystemNotification',
    async ({ userId, isLoaded}, { rejectWithValue }) => {
        if (isLoaded) return;

        try {
            const {data, error} = await supabase
                .from('system_notification')
                .select('*')
                .eq('is_broadcast', true)
                .or(`user_id.eq.${userId}`)
            
                if (error) {
                    return rejectWithValue(error.message)
                }

                return data
        } catch (error) {
            return rejectWithValue(error.message)
        
        }
    }
);

export const setupNotificationListener = createAsyncThunk(
    'systemNotification/setupNotificationListener',
    async (userId, {dispatch, getState, rejectWithValue}) => {
        const {isListening} = getState().systemNotifications;
        if (isListening) return;

        try {
            const channel = supabase
            .channel('public:system_notification')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'system_notification' }, (payload) => {
              // console.log(payload, 'notification received')
        
              const { name, desc, is_broadcast, user_id } = payload.new
        
              if (is_broadcast || user_id === userId) {
                dispatch(addNotification({name, desc}))
                // console.log(desc, 'notification content')
              }
            })
            .subscribe();
        
         return channel;

        } catch (error) {
            return rejectWithValue(error.message)
        }   
    }
)