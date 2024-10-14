import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchUserTeams = createAsyncThunk(
  'teams/fetchTeams',
  async ({ user_id, season_id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('*')
      .eq('user_id', user_id)
      .is('deleted_at', null)
      .order('id', { ascending: true })
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
      .select('*, user_id(name), team(*)')
      .eq('season_id', season_id)
      .eq('competition_id', competition_id)
      .eq('tour_id', tour_id)
      .range(from, to)
      .order('point', { ascending: true })
      .is('deleted_at', null)

    return { data, error }
  }
)

export const fetchTopTeams = createAsyncThunk(
  'teams/fetchTopTeams',
  async ({ competition_id }) => {
    const { data, error } = await supabase.rpc('get__team_point_desc', {
      comp_id: competition_id,
    })

    return { data, error }
  }
)
