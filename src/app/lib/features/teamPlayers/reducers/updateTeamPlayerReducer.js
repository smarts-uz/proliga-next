import { PLAYERS } from 'app/utils/players.util'
import { toast } from 'react-toastify'

export const updateTeamPlayerReducer = (state, action) => {
  const { player, team, teamConcat } = action.payload
  const maxTeamPlayers = team.transfers_from_one_team ?? 2

  const calcTeamPrice = () => {
    state.teamPrice =
      state.GOA.reduce((acc, player) => acc + player.price, 0) +
      state.DEF.reduce((acc, player) => acc + player.price, 0) +
      state.MID.reduce((acc, player) => acc + player.price, 0) +
      state.STR.reduce((acc, player) => acc + player.price, 0)
  }

  const createUpdatedPlayer = (prevPlayer) => ({
    ...prevPlayer,
    player_id: player.id,
    name: player.name,
    club_id: {
      slug: player.club.slug,
      id: player.club.id,
    },
    price: player.price,
    competition_id: team.competition_id.id,
    user_id: team.user_id,
    image: player.image,
  })

  const existingPlayer = teamConcat.find((p) => p.player_id === player.id)

  if (existingPlayer) {
    toast.warning('Ushbu oyinchi allaqachon oyinda!')
    return state
  }

  const clubId = player?.club?.id || player.club_id.id

  if (state.duplicatesMap[clubId] > maxTeamPlayers - 1) {
    toast.warning(
      `Ushbu klubdan ${maxTeamPlayers} ta oyinchi qo'shib bo'lmaydi!`
    )
    return state
  }

  if (
    state.GOA.length > 0 &&
    player.position === PLAYERS.GOA &&
    state.playersCount.GOA < 1
  ) {
    const emptyGOAPlayer = state.GOA.find((p) => !p.name)
    const newPlayer = createUpdatedPlayer(emptyGOAPlayer)
    state.GOA = state.GOA.filter((p) => p.id !== emptyGOAPlayer.id)
    state.GOA.push(newPlayer)
    state.playersCount.GOA++
    calcTeamPrice()
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    return state
  }
  if (
    player.position === PLAYERS.DEF &&
    state.playersCount.DEF < state.DEF.length
  ) {
    const emptyDEFPlayer = state.DEF.find((p) => !p.name)
    const newPlayer = createUpdatedPlayer(emptyDEFPlayer)
    state.DEF = state.DEF.filter((p) => p.id !== emptyDEFPlayer.id)
    state.DEF.push(newPlayer)
    state.playersCount.DEF++
    calcTeamPrice()
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    return state
  }
  if (
    player.position === PLAYERS.MID &&
    state.playersCount.MID < state.MID.length
  ) {
    const emptyMIDPlayer = state.MID.find((p) => !p.name)
    const newPlayer = createUpdatedPlayer(emptyMIDPlayer)
    state.MID = state.MID.filter((p) => p.id !== emptyMIDPlayer.id)
    state.MID.push(newPlayer)
    state.playersCount.MID++
    calcTeamPrice()
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    return state
  }
  if (
    player.position === PLAYERS.STR &&
    state.playersCount.STR < state.STR.length
  ) {
    const emptySTRPlayer = state.STR.find((p) => !p.name)
    const newPlayer = createUpdatedPlayer(emptySTRPlayer)
    state.STR = state.STR.filter((p) => p.id !== emptySTRPlayer.id)
    state.STR.push(newPlayer)
    state.playersCount.STR++
    calcTeamPrice()
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    return state
  }
}
