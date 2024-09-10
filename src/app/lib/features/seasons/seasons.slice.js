import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  seasons: [],
  isLoading: false,
  error: null,
}

const seasonsSlice = createSlice({
  name: 'seasons',
  initialState,
  reducers: {},
})

export default seasonsSlice.reducer
