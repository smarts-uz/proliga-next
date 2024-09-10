import { createSlice } from '@reduxjs/toolkit'
import { TABS } from 'app/utils/tabs.util'

const initialState = {
  gameTab: TABS.Transfer,
}

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.gameTab = action.payload
    },
  },
})

export const { setTab } = tabsSlice.actions

export default tabsSlice.reducer
