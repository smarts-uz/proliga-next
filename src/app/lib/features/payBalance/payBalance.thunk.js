import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPayBalance = createAsyncThunk(
  'payBalance/fetchPayBalance',
  async ({ user_id }) => {
    const { data, error } = await supabase
      .from('pay_balance')
      .select('*')
      .order('created_at', { ascending: true })
      .eq('user_id', user_id)

    return { data, error }
  }
)
