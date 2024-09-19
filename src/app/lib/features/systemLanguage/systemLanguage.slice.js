import { createSlice } from '@reduxjs/toolkit'
import { useTranslation } from 'react-i18next'

const initialState = {
  lang: 'uz',
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

export default systemLanguageSlice.reducer
