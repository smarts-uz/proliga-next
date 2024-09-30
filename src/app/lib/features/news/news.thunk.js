import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ page = 0, perPage = 8 }) => {
    let from = page * perPage
    let to = from + perPage

    const { data, error } = await supabase
      .from('news')
      .select('*')
      .range(from, to)
      .is('deleted_at', null)
      .order('created_at', { ascending: false })

    return { data, error }
  }
)
