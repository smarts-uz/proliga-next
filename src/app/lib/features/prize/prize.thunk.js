import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPrizes = createAsyncThunk('prizes/fetchPrizes', async () => {
  const { data, error } = await supabase
    .from('prize')
    .select('*, competition_id(id, name, flag)')
    .is('deleted_at', null)
    .is('is_active', true)
    .order('order', { ascending: true })

  return { data, error }
})
