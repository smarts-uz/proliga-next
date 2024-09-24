import { PLAYERS } from 'app/utils/players.util'
import { toast } from 'react-toastify'

export const swapTeamPlayerReducer = (state, action) => {
  const { player, team, previousPlayer } = action.payload
  const maxTeamPlayers = team.transfers_from_one_team ?? 2

  const calcTeamPrice = () => {
    state.teamPrice =
      state.GOA.reduce((acc, player) => acc + player.price, 0) +
      state.DEF.reduce((acc, player) => acc + player.price, 0) +
      state.MID.reduce((acc, player) => acc + player.price, 0) +
      state.STR.reduce((acc, player) => acc + player.price, 0)
  }

  const createUpdatedPlayer = (prevPlayer, newPlayer) => ({
    ...newPlayer,
    id: prevPlayer.id,
    club_id: {
      slug: newPlayer.club.slug,
      id: newPlayer.club.id,
    },
    price: newPlayer.price,
    competition_id: team.competition_id.id,
    user_id: team.user_id,
  })

  const clubId = player?.club?.id || player.club_id.id

  if (state.duplicatesMap[clubId] > maxTeamPlayers - 1) {
    toast.warning(
      `Ushbu klubdan ${maxTeamPlayers} ta oyinchi qo'shib bo'lmaydi!`
    )
    return state
  }

  if (state.GOA.length > 0 && player.position === PLAYERS.GOA) {
    const prevPlayer = state.GOA.find((p) => previousPlayer.id === p.id)
    state.GOA = state.GOA.map((p) =>
      p.id === player.id ? createUpdatedPlayer(prevPlayer, player) : p
    )
    const prevClubId = prevPlayer?.club?.id || prevPlayer.club_id.id
    if (state.duplicatesMap[prevClubId] > 0) {
      state.duplicatesMap[prevClubId]--
    }
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    calcTeamPrice()
    return state
  }
  if (player.position === PLAYERS.DEF && state.DEF.length > 0) {
    const prevPlayer = state.DEF.find((p) => previousPlayer.id === p.id)
    state.DEF = state.DEF.map((p) =>
      p.id === player.id ? createUpdatedPlayer(prevPlayer, player) : p
    )
    const prevClubId = prevPlayer?.club?.id || prevPlayer.club_id.id
    if (state.duplicatesMap[prevClubId] > 0) {
      state.duplicatesMap[prevClubId]--
    }
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    calcTeamPrice()
    return state
  }
  if (player.position === PLAYERS.MID && state.MID.length > 0) {
    const prevPlayer = state.MID.find((p) => previousPlayer.id === p.id)
    state.MID = state.MID.map((p) =>
      p.id === player.id ? createUpdatedPlayer(prevPlayer, player) : p
    )
    const prevClubId = prevPlayer?.club?.id || prevPlayer.club_id.id
    if (state.duplicatesMap[prevClubId] > 0) {
      state.duplicatesMap[prevClubId]--
    }
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    calcTeamPrice()
    return state
  }
  if (player.position === PLAYERS.STR && state.STR.length > 0) {
    const prevPlayer = state.STR.find((p) => previousPlayer.id === p.id)
    state.STR = state.STR.map((p) =>
      p.id === player.id ? createUpdatedPlayer(prevPlayer, player) : p
    )
    const prevClubId = prevPlayer?.club?.id || prevPlayer.club_id.id
    if (state.duplicatesMap[prevClubId] > 0) {
      state.duplicatesMap[prevClubId]--
    }
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    calcTeamPrice()
    return state
  }
}
