import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './features/auth/auth.slice.js'
import GameSlice from './features/game/game.slice.js'
import TransferSlice from './features/transfer/transfer.slice.js'
import UserSlice from './features/user/user.slice.js'
import CompetitionSlice from './features/competition/competition.slice.js'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    game: GameSlice,
    transfer: TransferSlice,
    user: UserSlice,
    competition: CompetitionSlice,
  },
})

export default store
