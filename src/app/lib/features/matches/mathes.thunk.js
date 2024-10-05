import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async ({ season_id, competition_id, tour_id }) => {
    const { data, error } = await supabase
      .from('match')
      .select(
        'status, home_club_result, away_club_result, winner_club_id,started_date, finished_date, home_club_id:club!home_club_id(name, slug, id), away_club_id:club!away_club_id(name, slug, id)'
      )
      .eq('season_id', season_id)
      .eq('competition_id', competition_id)
      .eq('tour_id', tour_id)
      .is('deleted_at', null)
      .limit(20)

    return { data, error }
  }
)
