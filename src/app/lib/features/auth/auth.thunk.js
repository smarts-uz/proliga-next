import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGeo = createAsyncThunk('auth/fetchGeo', async () => {
  const response = await fetch('/api/geoip')
  if (!response.ok) {
    throw new Error('Failed to fetch geolocation data')
  }
  const data = await response.json()

  return { data }
})
