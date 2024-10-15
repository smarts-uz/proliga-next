import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async ({ competition_id }) => {
    const { data, error } = await supabase
      .from('player')
      .select(
        'id, name, position, club(id, name, slug), price, point, image, percentage'
      )
      .eq('competition_id', competition_id)
      .is('deleted_at', null)
      .limit(1000)

    return { data, error }
  }
)

export const fetchTopPlayers = createAsyncThunk(
  'players/fetchTopPlayers',
  async ({ competition_id }) => {
    const { data, error } = await supabase.rpc('get__player_point_desc', {
      comp_id: competition_id,
    })

    return { data, error }
  }
)
