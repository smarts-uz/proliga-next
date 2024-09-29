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

    return { data, error }
  }
)

export const fetchTopPlayers = createAsyncThunk(
  'players/fetchTopPlayers',
  async ({ competition_id }) => {
    const { data, error } = await supabase
      .from('player')
      .select('id, name, image, position, club(id, name, slug), price, point')
      .eq('competition_id', competition_id)
      .order('point')
      .limit(3)

    return { data, error }
  }
)

export const fetchCurrentPlayerResult = createAsyncThunk(
  'players/fetchCurrentPlayerResult',
  async ({ player_id, season_id, competition_id, tour_id }) => {
    const { data, error } = await supabase
      .from('player_result')
      .select('*')
      .eq('player_id', player_id)
      .eq('season_id', season_id)
      .eq('competition_id', competition_id)
      .eq('tour_id', tour_id)
      .order('id')

    return { data, error }
  }
)

// export const fetchCurrentPlayerMatches = createAsyncThunk(
//   'players/fetchCurrentPlayerMatches',
//   async({})
// )
