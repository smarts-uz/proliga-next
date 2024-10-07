import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'app/lib/supabaseClient'

export const fetchPayExpenses = createAsyncThunk(
  'payExpense/fetchPayBalance',
  async ({ user_id }) => {
    const { data, error } = await supabase
      .from('pay_expense')
      .select('*, pay_package_id(id, name_uz, name_ru), team_id(id, name)')
      .order('created_at', { ascending: true })
      .eq('user_id', user_id)

    return { data, error }
  }
)
