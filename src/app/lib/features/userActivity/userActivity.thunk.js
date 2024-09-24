import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchUserActivity = createAsyncThunk(
  'userActivity/fetchUserActivity',
  async ({ competition_id, user_id, team_id, page, perPage }) => {
    let from = page * perPage
    let to = from + perPage

    const { data, error } = await supabase
      .from('user_activity')
      .select('id,name_uz, name_ru, created_at')
      .eq('user_id', user_id)
      .eq('competition_id', competition_id)
      .eq('team_id', team_id)
      .range(from, to)
      .order('created_at', { ascending: false })

    return { data, error }
  }
)
