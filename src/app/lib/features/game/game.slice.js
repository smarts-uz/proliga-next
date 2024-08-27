import { createSlice } from '@reduxjs/toolkit'
import { tabs } from '../../../utils/tabs.util'

const initialState = {
  team: null,
  competition: null,
  tour: null,
  tab: tabs.GameProfile,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
})

export default gameSlice.reducer
