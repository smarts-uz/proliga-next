import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const { data, error } = await supabase
    .from('news')
    .order('created_at', { ascending: false })
    .select()

  return { data, error }
})
