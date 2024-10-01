import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPlayerPoint = createAsyncThunk(
  'playerPoint/fetchPlayerPoint',
  async ({ competition_id, tour_id, playerIds }) => {
    const { data, error } = await supabase
      .from('player_point')
      .select('id, point, player_id, match_id(*), player_result_id(*)')
      .eq('competition_id', competition_id)
      .eq('tour_id', tour_id)
      .in('player_id', playerIds)
      .is('deleted_at', null)

    return { data, error }
  }
)
