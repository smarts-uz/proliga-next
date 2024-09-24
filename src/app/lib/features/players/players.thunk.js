import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async ({ competition_id }) => {
    const { data, error } = await supabase
      .from('player')
      .select('id, name, position, club(id, name, slug), price, point')
      .eq('competition_id', competition_id)

    return { data, error }
  }
)

export const fetchTopPlayers = createAsyncThunk(
  'players/fetchTopPlayers',
  async ({ competition_id }) => {
    const { data, error } = await supabase
      .from('player')
      .select('id, name, position, club(id, name, slug), price, point')
      .eq('competition_id', competition_id)
      .order('point', { ascending: false })

    return { data, error }
  }
)
