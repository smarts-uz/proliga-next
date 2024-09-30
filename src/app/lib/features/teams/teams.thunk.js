import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchUserTeams = createAsyncThunk(
  'teams/fetchTeams',
  async ({ user_id, season_id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('*')
      .eq('user_id', user_id)
      .eq('season_id', season_id)

    return { data, error }
  }
)

export const fetchAllTeams = createAsyncThunk(
  'teams/fetchAllTeams',
  async ({ season_id, competition_id, page, perPage, tour_id }) => {
    let from = page * perPage
    let to = from + perPage

    const { data, error } = await supabase
      .from('tour_team')
      .select('*, user_id(email), team(*)')
      .eq('season_id', season_id)
      .eq('competition_id', competition_id)
      .eq('tour_id', tour_id)
      .range(from, to)
      .order('point', { ascending: false })
      .order('point')

    return { data, error }
  }
)

export const fetchTopTeams = createAsyncThunk(
  'teams/fetchTopTeams',
  async ({ season_id, competition_id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('*, user_id(email)')
      .eq('season_id', season_id)
      .eq('competition_id', competition_id)
      .order('point', { ascending: true })
      .limit(3)

    return { data, error }
  }
)
