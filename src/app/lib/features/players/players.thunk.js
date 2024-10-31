import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async ({ competition_id }) => {
    const { data, error } = await supabase
      .from('player')
      .select('*, club(id, name, slug)')
      .eq('competition_id', competition_id)
      .is('deleted_at', null)
      .limit(1000)

    return { data, error }
  }
)
export const fetchAdditionalPlayers = createAsyncThunk(
  'players/fetchAdditionalPlayers',
  async ({ competition_id, page }) => {
    let from = page * 1000
    let to = from + 1000

    const { data, error } = await supabase
      .from('player')
      .select('*, club(id, name, slug)')
      .eq('competition_id', competition_id)
      .is('deleted_at', null)
      .limit(1000)
      .range(from, to)

    return { data, error, page: page * 1000 }
  }
)

export const fetchTopPlayers = createAsyncThunk(
  'players/fetchTopPlayers',
  async ({ competition_id }) => {
    const { data, error } = await supabase
      .rpc('get__player_point_desc', {
        comp_id: competition_id,
      })
      .limit(3)

    return { data, error }
  }
)
