import { PLAYERS } from 'app/utils/players.util'
import { toast } from 'react-toastify'

export const deleteTeamPlayerReducer = (state, action) => {
  const { player, is_team_created } = action.payload

  const evaluateTeamClubId = () => {
    state.duplicatesMap = {}
    const newTeam = [...state.GOA, ...state.DEF, ...state.MID, ...state.STR]

    newTeam.forEach((player) => {
      const clubSlug = player?.club_id?.id ?? ''

      if (player.name) {
        state.duplicatesMap[clubSlug] = (state.duplicatesMap[clubSlug] || 0) + 1
      }
    })
  }

  const calcTeamPrice = () => {
    state.teamPrice =
      state.GOA.reduce((acc, player) => acc + player.price, 0) +
      state.DEF.reduce((acc, player) => acc + player.price, 0) +
      state.MID.reduce((acc, player) => acc + player.price, 0) +
      state.STR.reduce((acc, player) => acc + player.price, 0)
  }

  const deletedPlayerObj = (prevPlayer) => ({
    ...prevPlayer,
    player_id: null,
    name: null,
    club_id: null,
    price: null,
    percentage: null,
    image: null,
  })

  if (player.position === PLAYERS.GOA) {
    state.GOA = state.GOA.filter((p) => p.id !== player.id)
    state.GOA.push(deletedPlayerObj(player))
    state.playersCount.GOA--
    calcTeamPrice()
    evaluateTeamClubId()
    return state
  }
  if (player.position === PLAYERS.DEF) {
    if (state.playersCount.DEF < 4 && is_team_created) {
      toast.warning('Sizda kamida 3 hiboyachi bolishi shart!', {
        theme: 'dark',
      })
      return state
    }
    state.DEF = state.DEF.filter((p) => p.id !== player.id)
    state.DEF.push(deletedPlayerObj(player))
    state.playersCount.DEF--
    calcTeamPrice()
    evaluateTeamClubId()
    return state
  }
  if (player.position === PLAYERS.MID) {
    if (state.playersCount.MID < 4 && is_team_created) {
      toast.warning('Sizda kamida 3 yarim himoyachi bolishi shart!', {
        theme: 'dark',
      })
      return state
    }
    state.MID = state.MID.filter((p) => p.id !== player.id)
    state.MID.push(deletedPlayerObj(player))
    state.playersCount.MID--
    calcTeamPrice()
    evaluateTeamClubId()
    return state
  }
  if (player.position === PLAYERS.STR) {
    if (state.playersCount.STR < 3 && is_team_created) {
      toast.warning('Sizda kamida 2 hujumchi bolishi shart!', { theme: 'dark' })
      return state
    }
    state.STR = state.STR.filter((p) => p.id !== player.id)
    state.STR.push(deletedPlayerObj(player))
    state.playersCount.STR--
    calcTeamPrice()
    evaluateTeamClubId()
    return state
  }
}
