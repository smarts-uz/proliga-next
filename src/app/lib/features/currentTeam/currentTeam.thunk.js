import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchCurrentTeam = createAsyncThunk(
  'currentTeam/fetchCurrentTeam',
  async ({ id, user_id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('*, competition_id(title, id)')
      .eq('id', id)
      .eq('user_id', user_id)
      .is('deleted_at', null)

    return { data, error }
  }
)

export const fetchSelectedTeam = createAsyncThunk(
  'currentTeam/fetchSelectedTeam',
  async ({ id }) => {
    const { data, error } = await supabase
      .from('team')
      .select('*, competition_id(title, id)')
      .eq('id', id)
      .is('deleted_at', null)

    return { data, error }
  }
)
