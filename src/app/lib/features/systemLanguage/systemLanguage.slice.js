import { createSlice } from '@reduxjs/toolkit'

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
