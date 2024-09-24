import { createSlice } from '@reduxjs/toolkit'
import { newsExtraReducer } from './news.extraReducer'

const initialState = {
  news: [],
  isLoading: false,
  error: null,
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: newsExtraReducer,
})

export default newsSlice.reducer
