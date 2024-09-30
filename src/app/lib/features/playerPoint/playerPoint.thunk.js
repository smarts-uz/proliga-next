import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPlayerPoint = createAsyncThunk(
  'playerPoint/fetchPlayerPoint',
  async ({ competition_id, tour_id, page, perPage }) => {
    let from = page * perPage
    let to = from + perPage

    const { data, error } = await supabase
      .from('player_point')
      .select('*')
      .eq('competition_id', competition_id)
      .eq('tour_id', tour_id)
      .range(from, to)
      .order('id', { ascending: true })

    return { data, error }
  }
)
