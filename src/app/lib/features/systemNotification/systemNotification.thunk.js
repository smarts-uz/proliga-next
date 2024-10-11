import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'
import { addNotification } from './systemNotification.slice'

export const fetchSystemNotification = createAsyncThunk(
  'systemNotification/fetchSystemNotification',
  async () => {
    const { data, error } = await supabase
      .from('system_notification')
      .select('*')
      .is('deleted_at', null)
      .eq('is_broadcast', true)

    return { data, error }
  }
)

export const fetchPersonalNotification = createAsyncThunk(
  'systemNotification/fetchPersonalNotification',
  async ({ userId }) => {
    const { data, error } = await supabase
      .from('system_notification')
      .select('*')
      .is('deleted_at', null)
      .eq('user_id', userId)

    return { data, error }
  }
)

export const setupNotificationListener = createAsyncThunk(
  'systemNotification/setupNotificationListener',
  async ({ userId }) => {
    try {
      const channel = supabase
        .channel('public:system_notification')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'system_notification' },
          (payload) => {
            const { name, desc, is_broadcast, user_id, created_at } =
              payload.new
            console.log(payload)

            if (is_broadcast || user_id === userId) {
              dispatch(addNotification({ name, desc }))
            }
          }
        )
        .subscribe()

      return channel
    } catch (error) {
      toast.error(error.message, { theme: 'dark' })
    }
  }
)
