import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchBanners = createAsyncThunk('banner/fetchBanner', async () => {
  const { data, error } = await supabase
    .from('banner')
    .select('id, name, content_url, link')
    .is('deleted_at', null)
    .is('is_active', true)

  return { data, error }
})
