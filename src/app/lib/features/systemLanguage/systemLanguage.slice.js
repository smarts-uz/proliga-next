import { createSlice } from '@reduxjs/toolkit'
import { LANGUAGE } from 'app/utils/languages.util'

const initialState = {
  lang: LANGUAGE.uz,
}

export const systemLanguageSlice = createSlice({
  name: 'systemLanguage',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload
    },
  },
})

export const { setLanguage } = systemLanguageSlice.actions

export default systemLanguageSlice.reducer
