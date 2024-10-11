import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPrizes = createAsyncThunk('prizes/fetchPrizes', async () => {
  const { data, error } = await supabase
    .from('prize')
    .select('*')
    .is('deleted_at', null)
    .order('order', { ascending: false })

  return { data, error }
})
