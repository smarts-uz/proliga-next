import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

// export const fetchPlayerResult = createAsyncThunk(
//   'players/fetchPlayerResult',
//   async ({ season_id, competition_id, page, perPage }) => {
//     let from = page * perPage
//     let to = from + perPage

//     const { data, error } = await supabase
//       .from('player_result')
//       .select('*, player_id(name, position, point), club_id(id, name, slug)', {
//         count: 'exact',
//         head: false,
//       })
//       .eq('competition_id', competition_id)
//       .eq('season_id', season_id)
//       .range(from, to)
//       .order('id', { ascending: true })
//       .is('deleted_at', null)

//     return { data, error }
//   }
// )

export const fetchPlayerResult = createAsyncThunk(
  'players/fetchPlayerResult',
  async ({ season_id, competition_id }) => {
    const { data, error } = await supabase
      .from('player_result')
      .select('*, player_id(name, position, point), club_id(id, name, slug)')
      .eq('competition_id', competition_id)
      .eq('season_id', season_id)
      .order('id', { ascending: true })
      .is('deleted_at', null)

    return { data, error }
  }
)
