import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './features/auth/auth.slice.js'
import GameSlice from './features/game/game.slice.js'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    game: GameSlice,
  },
})

export default store
