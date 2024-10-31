import { combineReducers } from '@reduxjs/toolkit'
import AuthSlice from './features/auth/auth.slice.js'
import CompetitionSlice from './features/competition/competition.slice.js'
import PlayersSlice from './features/players/players.slice.js'
import TeamSlice from './features/teams/teams.slice.js'
import CurrentTeamSlice from './features/currentTeam/currentTeam.slice.js'
import ClubsSlice from './features/clubs/clubs.slice.js'
import TeamPlayersSlice from './features/teamPlayers/teamPlayers.slice.js'
import ToursSlice from './features/tours/tours.slice.js'
import TourTeamsSlice from './features/tourTeams/tourTeams.slice.js'
import SeasonSlice from './features/season/season.slice.js'
import SystemLanguageSlice from './features/systemLanguage/systemLanguage.slice.js'
import PlayerPointSlice from './features/playerPoint/playerPoint.slice.js'
import MatchesSlice from './features/matches/matches.slice.js'
import NewsSlice from './features/news/news.slice.js'
import UserActivitySlice from './features/userActivity/userActivity.slice.js'
import PackagesSlice from './features/packages/packages.slice.js'
import PayBalanceSlice from './features/payBalance/payBalance.slice.js'
import PayExpenseSlice from './features/payExpense/payExpense.slice.js'
import SystemNotificationSlice from './features/systemNotification/systemNotification.slice.js'
import PrizesSlice from './features/prize/prize.slice.js'
import BannerSlice from './features/banner/banner.slice.js'
import systemConfigSlice from './features/systemConfig/systemConfig.slice.js'

export const rootReducer = combineReducers({
  // playerResult: PlayerResultSlice,
  auth: AuthSlice,
  competition: CompetitionSlice,
  players: PlayersSlice,
  teams: TeamSlice,
  teamPlayers: TeamPlayersSlice,
  currentTeam: CurrentTeamSlice,
  clubs: ClubsSlice,
  tours: ToursSlice,
  season: SeasonSlice,
  tourTeams: TourTeamsSlice,
  playerPoint: PlayerPointSlice,
  matches: MatchesSlice,
  news: NewsSlice,
  userActivity: UserActivitySlice,
  packages: PackagesSlice,
  payBalance: PayBalanceSlice,
  payExpense: PayExpenseSlice,
  systemLanguage: SystemLanguageSlice,
  systemConfig: systemConfigSlice,
  systemNotifications: SystemNotificationSlice,
  prizes: PrizesSlice,
  banner: BannerSlice,
})
