import { combineReducers } from '@reduxjs/toolkit'
import AuthSlice from './features/auth/auth.slice.js'
import GameSlice from './features/game/game.slice.js'
import UserSlice from './features/user/user.slice.js'
import CompetitionSlice from './features/competition/competition.slice.js'
import StatisticsSlice from './features/statistics/statistics.slice.js'
import PlayersSlice from './features/players/players.slice.js'
import TeamSlice from './features/teams/teams.slice.js'
import CurrentTeamSlice from './features/currentTeam/currentTeam.slice.js'
import ClubsSlice from './features/clubs/clubs.slice.js'
import TeamPlayersSlice from './features/teamPlayers/teamPlayers.slice.js'
import ToursSlice from './features/tours/tours.slice.js'
import TourTeamSlice from './features/tourTeam/tourTeam.slice.js'

export const rootReducer = combineReducers({
  auth: AuthSlice,
  game: GameSlice,
  user: UserSlice,
  competition: CompetitionSlice,
  statistics: StatisticsSlice,
  players: PlayersSlice,
  teams: TeamSlice,
  teamPlayers: TeamPlayersSlice,
  currentTeam: CurrentTeamSlice,
  clubs: ClubsSlice,
  tours: ToursSlice,
  tourTeam: TourTeamSlice,
})
