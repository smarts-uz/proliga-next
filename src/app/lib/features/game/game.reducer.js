import { toast } from 'react-toastify'
import { PLAYERS } from 'app/utils/playerTypes.util.'

export const addPlayerToTeamReducer = (state, action) => {
  const { player } = action.payload

  if (
    player.position === PLAYERS.GOA &&
    state.GOA.length < 1 &&
    state.teamCount < 11
  ) {
    state.GOA.push(player)
    if (player.name) {
      state.teamCount++
    }
  }
  if (
    player.position === PLAYERS.DEF &&
    state.DEF.length < 5 &&
    state.teamCount < 11
  ) {
    state.DEF.push(player)
    if (player.name) {
      state.teamCount++
    }
  }
  if (
    player.position === PLAYERS.MID &&
    state.MID.length < 5 &&
    state.teamCount < 11
  ) {
    state.MID.push(player)
    if (player.name) {
      state.teamCount++
    }
  }
  if (
    player.position === PLAYERS.STR &&
    state.STR.length < 4 &&
    state.teamCount < 11
  ) {
    state.STR.push(player)
    if (player.name) {
      state.teamCount++
    }
  }
}

export const updatePlayerInTeamReducer = (state, action) => {
  const { player, team, tour_team } = action.payload

  const updatedPlayerObj = (prevPlayer) => ({
    ...prevPlayer,
    player_id: player.id,
    name: player.name,
    club_id: player.club_id,
    club: {
      slug: player.club.slug,
    },
    price: player.price,
    competition_id: team.competition_id.id,
    user_id: team.user_id,
  })

  if (
    state.GOA.length > 0 &&
    player.position === PLAYERS.GOA &&
    state.indexes.GOA < 1
  ) {
    const newPlayer = updatedPlayerObj(state.GOA[state.indexes.GOA])
    state.GOA[state.indexes.GOA] = newPlayer
    state.indexes.GOA++
  }
  if (player.position === PLAYERS.DEF && state.indexes.DEF < state.DEF.length) {
    const newPlayer = updatedPlayerObj(state.DEF[state.indexes.DEF])
    state.DEF[state.indexes.DEF] = newPlayer
    state.indexes.DEF++
  }
  if (player.position === PLAYERS.MID && state.indexes.MID < state.MID.length) {
    const newPlayer = updatedPlayerObj(state.MID[state.indexes.MID])
    state.MID[state.indexes.MID] = newPlayer
    state.indexes.MID++
  }
  if (player.position === PLAYERS.STR && state.indexes.STR < state.STR.length) {
    const newPlayer = updatedPlayerObj(state.STR[state.indexes.STR])
    state.STR[state.indexes.STR] = newPlayer

    state.indexes.STR++
  }
}

export const softDeletePlayerFromTeamReducer = (state, action) => {
  const { player } = action.payload

  const deletedPlayerObj = (prevPlayer) => ({
    ...prevPlayer,
    player_id: null,
    name: null,
    club_id: null,
    club: {
      slug: null,
    },
    price: null,
  })

  if (player.position === PLAYERS.GOA) {
    const currentPlayer = player
    state.GOA = state.GOA.filter((p) => p.id !== player.id)
    state.GOA.push(deletedPlayerObj(currentPlayer))
    state.indexes.GOA--
  }
  if (player.position === PLAYERS.DEF) {
    const currentPlayer = player
    state.DEF = state.DEF.filter((p) => p.id !== player.id)
    state.DEF.push(deletedPlayerObj(currentPlayer))
    state.indexes.DEF--
  }
  if (player.position === PLAYERS.MID) {
    const currentPlayer = player
    state.MID = state.MID.filter((p) => p.id !== player.id)
    state.MID.push(deletedPlayerObj(currentPlayer))
    state.indexes.MID--
  }
  if (player.position === PLAYERS.STR) {
    const currentPlayer = player
    state.STR = state.STR.filter((p) => p.id !== player.id)
    state.STR.push(deletedPlayerObj(currentPlayer))
    state.indexes.STR--
  }
}

export const setTeamPlayersReducer = (state, action) => {
  const team = action.payload
  team.forEach((player) => {
    if (player.position === PLAYERS.GOA) {
      state.GOA.push(player)
      state.teamCount++
    }
    if (player.position === PLAYERS.DEF) {
      state.DEF.push(player)
      state.teamCount++
    }
    if (player.position === PLAYERS.MID) {
      state.MID.push(player)
      state.teamCount++
    }
    if (player.position === PLAYERS.STR) {
      state.STR.push(player)
      state.teamCount++
    }
  })
}

export const setCapitanReducer = (state, action) => {
  const capitan = action.payload && JSON.parse(action.payload)

  if (capitan) {
    state.capitan = capitan
  }
}

export const setDraggablePlayerReducer = (state, action) => {
  const { player_id, position } = action.payload

  if (!position) {
    toast.warning("Iltimos, o'yinchi dalaga qo'shing")
    return state
  }
  const DEFStr = JSON.stringify(state.DEF)
  const DEF = JSON.parse(DEFStr)
  const MIDStr = JSON.stringify(state.MID)
  const MID = JSON.parse(MIDStr)
  const STRStr = JSON.stringify(state.STR)
  const STR = JSON.parse(STRStr)
  const team = [...DEF, ...MID, ...STR]

  const prevPlayer = team.find((p) => p.id === +player_id)
  if (!prevPlayer) {
    toast.warning("Iltimos, o'yinchi dalaga qo'shing")
    return state
  }

  if (state.DEF.length < 3 && state.MID.length < 3 && state.STR.length < 2) {
    toast.error("O'yinchi formati notogri")
    return state
  }
  function isValidLength(input, min, max) {
    return input.length >= min && input.length <= max
  }

  const conditions =
    isValidLength(state.DEF, 3, 5) &&
    isValidLength(state.MID, 3, 4) &&
    isValidLength(state.STR, 2, 4)

  if (
    position === PLAYERS.DEF &&
    prevPlayer.position !== position &&
    conditions
  ) {
    state.MID = state.MID.filter((p) => p.id !== +player_id)
    state.STR = state.STR.filter((p) => p.id !== +player_id)
    state[position].push({ ...prevPlayer, position })
  }
  if (
    position === PLAYERS.MID &&
    prevPlayer.position !== position &&
    conditions
  ) {
    state.DEF = state.DEF.filter((p) => p.id !== +player_id)
    state.STR = state.STR.filter((p) => p.id !== +player_id)
    state[position].push({ ...prevPlayer, position })
  }
  if (
    position === PLAYERS.STR &&
    prevPlayer.position !== position &&
    conditions
  ) {
    state.DEF = state.DEF.filter((p) => p.id !== +player_id)
    state.MID = state.MID.filter((p) => p.id !== +player_id)
    state[position].push({ ...prevPlayer, position })
  }
}

export const deletePlayerByIdReducer = (state, action) => {
  const player_id = action.payload
  state.DEF = state.DEF.filter((p) => p.id !== +player_id)
  state.MID = state.MID.filter((p) => p.id !== +player_id)
  state.STR = state.STR.filter((p) => p.id !== +player_id)
  state.teamCount--
}
