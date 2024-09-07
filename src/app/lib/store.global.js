import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './features/auth/auth.slice.js'
import GameSlice from './features/game/game.slice.js'
import UserSlice from './features/user/user.slice.js'
import CompetitionSlice from './features/competition/competition.slice.js'
import StatisticsSlice from './features/statistics/statistics.slice.js'
import PlayersSlice from './features/players/players.slice.js'
import TeamSlice from './features/teams/teams.slice.js'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    game: GameSlice,
    user: UserSlice,
    competition: CompetitionSlice,
    statistics: StatisticsSlice,
    players: PlayersSlice,
    teams: TeamSlice,
  },
})

export default store
