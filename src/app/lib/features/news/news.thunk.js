import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .range(2, 3)
    .limit(1)

  return { data, error }
})
