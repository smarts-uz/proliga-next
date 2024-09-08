import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'
import { useDispatch } from 'react-redux'

export const fetchTeams = createAsyncThunk(
  'team/fetchTeams',
  async ({ user_id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('*')
      .eq('user_id', user_id)
    return { data, error }
  }
)
