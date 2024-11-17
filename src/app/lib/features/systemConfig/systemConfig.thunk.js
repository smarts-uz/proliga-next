import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchSystemConfig = createAsyncThunk(
  'systemConfig/fetchSystemConfig',
  async () => {
    const { data, error } = await supabase.from('system_config').select('key, value, type')

    return { data, error }
  }
)
