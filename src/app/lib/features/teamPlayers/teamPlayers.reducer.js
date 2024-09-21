import { PLAYERS } from 'app/utils/players.util'
import { toast } from 'react-toastify'

export const deleteTeamPlayerReducer = (state, action) => {
  const { player } = action.payload

  const clubId = player?.club?.id || player.club_id.id

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
  })

  if (player.position === PLAYERS.GOA) {
    state.GOA = state.GOA.filter((p) => p.id !== player.id)
    state.GOA.push(deletedPlayerObj(player))
    state.playersCount.GOA--
    calcTeamPrice()
    if (state.duplicatesMap[clubId] > 0) {
      state.duplicatesMap[clubId]--
    }
    return state
  }
  if (player.position === PLAYERS.DEF) {
    if (state.playersCount.DEF < 4) {
      toast.warning('Sizda kamida 3 hiboyachi bolishi shart!')
      return state
    }
    state.DEF = state.DEF.filter((p) => p.id !== player.id)
    state.DEF.push(deletedPlayerObj(player))
    state.playersCount.DEF--
    calcTeamPrice()
    if (state.duplicatesMap[clubId] > 0) {
      state.duplicatesMap[clubId]--
    }
    return state
  }
  if (player.position === PLAYERS.MID) {
    if (state.playersCount.MID < 4) {
      toast.warning('Sizda kamida 3 yarim himoyachi bolishi shart!')
      return state
    }
    state.MID = state.MID.filter((p) => p.id !== player.id)
    state.MID.push(deletedPlayerObj(player))
    state.playersCount.MID--
    calcTeamPrice()
    if (state.duplicatesMap[clubId] > 0) {
      state.duplicatesMap[clubId]--
    }
    return state
  }
  if (player.position === PLAYERS.STR) {
    if (state.playersCount.STR < 3) {
      toast.warning('Sizda kamida 2 hujumchi bolishi shart!')
      return state
    }
    state.STR = state.STR.filter((p) => p.id !== player.id)
    state.STR.push(deletedPlayerObj(player))
    state.playersCount.STR--
    calcTeamPrice()
    if (state.duplicatesMap[clubId] > 0) {
      state.duplicatesMap[clubId]--
    }
    return state
  }
}

export const addTeamPlayerReducer = (state, action) => {
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
  })

  const softDeleteEmptyPlayer = (emptyPlayer) => {
    if (emptyPlayer.position === PLAYERS.DEF) {
      state.DEF = state.DEF.filter((p) => p.id !== emptyPlayer.id)
    }
    if (emptyPlayer.position === PLAYERS.MID) {
      state.MID = state.MID.filter((p) => p.id !== emptyPlayer.id)
    }
    if (emptyPlayer.position === PLAYERS.STR) {
      state.STR = state.STR.filter((p) => p.id !== emptyPlayer.id)
    }
  }

  const emptyPlayer = teamConcat.find((player) => !player.name)

  if (!emptyPlayer) {
    toast.warning('Boshqa oyinchi qoshish mumkin emas!')
    return
  }

  const existingPlayer = teamConcat.find((p) => p.player_id === player.id)

  if (existingPlayer) {
    toast.warning('Ushbu oyinchi allaqachon oyinda!')
    return
  }

  const clubId = player?.club?.id || player.club_id.id
  if (state.duplicatesMap[clubId] > maxTeamPlayers - 1) {
    toast.warning(
      `Ushbu clubga ${maxTeamPlayers} ta oyinchi qo'shib bo'lmaydi!`
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
    player.position === PLAYERS.DEF &&
    state.playersCount.DEF >= state.DEF.length &&
    state.DEF.length < 5
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatedPlayer(player)
    delete newPlayer.club
    state.DEF.push({ ...newPlayer, id: emptyPlayer.id })
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
    player.position === PLAYERS.MID &&
    state.playersCount.MID >= state.MID.length &&
    state.MID.length < 5
  ) {
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatedPlayer(player)
    delete newPlayer.club
    state.MID.push({ ...newPlayer, id: emptyPlayer.id })
    state.playersCount.MID++
    calcTeamPrice()
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
  if (
    player.position === PLAYERS.STR &&
    state.playersCount.STR >= state.STR.length &&
    state.STR.length < 3
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatedPlayer(player)
    delete newPlayer.club
    state.STR.push({ ...newPlayer, id: emptyPlayer.id })
    state.playersCount.STR++
    calcTeamPrice()
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    return state
  }
}

export const setCaptainReducer = (state, action) => {
  const playerId = action.payload

  if (!playerId) {
    return state
  }

  state.GOA = state.GOA.map((player) => {
    if (player.player_id === +playerId) {
      return { ...player, is_captain: true }
    }
    return { ...player, is_captain: false }
  })
  state.DEF = state.DEF.map((player) => {
    if (player.player_id === +playerId) {
      return { ...player, is_captain: true }
    }
    return { ...player, is_captain: false }
  })
  state.MID = state.MID.map((player) => {
    if (player.player_id === +playerId) {
      return { ...player, is_captain: true }
    }
    return { ...player, is_captain: false }
  })
  state.STR = state.STR.map((player) => {
    if (player.player_id === +playerId) {
      return { ...player, is_captain: true }
    }
    return { ...player, is_captain: false }
  })
  return state
}

export const clearTeamPlayersReducer = (state, action) => {
  const deletedPlayerObj = (prevPlayer) => ({
    ...prevPlayer,
    player_id: null,
    name: null,
    club_id: null,
    price: null,
  })

  const prevGOA = state.GOA.filter((p) => deletedPlayerObj(p))
  state.GOA = state.GOA.filter((p) => ({
    ...p,
    player_id: null,
    name: null,
    club_id: null,
    price: null,
  }))
  state.DEF = state.DEF.filter((p) => deletedPlayerObj(p))
  state.MID = state.MID.filter((p) => deletedPlayerObj(p))
  state.STR = state.STR.filter((p) => deletedPlayerObj(p))
}
