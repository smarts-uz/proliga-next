import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'
import { addNotification } from './systemNotification.slice'

export const fetchAllNotifications = createAsyncThunk(
  'systemNotification/fetchAllNotifications',
  async ({ userId }) => {
    try {
      // Fetch system (broadcast) notifications
      const { data: systemData, error: systemError } = await supabase
        .from('system_notification')
        .select('*')
        .eq('is_broadcast', true)
        .is('deleted_at', null)
        .order('created_at');

      if (systemError) {
        console.error('System notification fetch error:', systemError);
        return { data: [], error: systemError.message }; // Return an empty array with the error
      }

      // Fetch personal notifications for the user
      const { data: personalData, error: personalError } = await supabase
        .from('system_notification')
        .select('*')
        .eq('user_id', userId)
        .is('deleted_at', null)
        .order('created_at');

      if (personalError) {
        console.error('Personal notification fetch error:', personalError);
        return { data: [], error: personalError.message }; // Return an empty array with the error
      }

      // Combine both system and personal notifications
      const allNotifications = [...systemData, ...personalData];

      return { data: allNotifications };
    } catch (error) {
      console.error('Fetch notifications error:', error);
      return { data: [], error: error.message }; 
    }
  }
);


export const setupNotificationListener = createAsyncThunk(
  'systemNotification/setupNotificationListener',
  async ({ userId }, { dispatch }) => {
    try {
      const channel = supabase
        .channel('public:system_notification')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'system_notification' },
          (payload) => {
            const { name, desc, is_broadcast, user_id } = payload.new

            if (is_broadcast || user_id === userId) {
              dispatch(addNotification({ name, desc }))
            }
          }
        )
        .subscribe()

      // Do not dispatch the channel itself
      return // If needed, handle channel separately outside Redux
    } catch (error) {
      toast.error(error.message, { theme: 'dark' })
    }
  }
)
