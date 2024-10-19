import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'
import { addNotification } from './systemNotification.slice'

export const fetchSystemNotification = createAsyncThunk(
  'systemNotification/fetchSystemNotification',
  async () => {
    const { data, error } = await supabase
      .from('system_notification')
      .select('*')
      .eq('is_broadcast', true)
      .is('deleted_at', null)
      .order('created_at')

    return { data, error }
  }
)

export const fetchPersonalNotification = createAsyncThunk(
  'systemNotification/fetchPersonalNotification',
  async ({ userId }) => {
    const { data, error } = await supabase
      .from('system_notification')
      .select('*')
      .eq('user_id', userId)
      .is('deleted_at', null)
      .order('created_at')

    return { data, error }
  }
)

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
