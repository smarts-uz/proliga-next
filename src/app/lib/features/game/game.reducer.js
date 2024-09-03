import { PLAYERS } from 'app/utils/playerTypes.util.'

export const addPlayerToTeamReducer = (state, action) => {
  const { player } = action.payload

  if (
    player.position === PLAYERS.GOA &&
    state.GOA.length < 1 &&
    state.teamCount < 11
  ) {
    state.GOA.push(player)
    state.teamCount++
  }
  if (
    player.position === PLAYERS.DEF &&
    state.DEF.length < 5 &&
    state.teamCount < 11
  ) {
    state.DEF.push(player)
    state.teamCount++
  }
  if (
    player.position === PLAYERS.MID &&
    state.MID.length < 5 &&
    state.teamCount < 11
  ) {
    state.MID.push(player)
    state.teamCount++
  }
  if (
    player.position === PLAYERS.STR &&
    state.STR.length < 4 &&
    state.teamCount < 11
  ) {
    state.STR.push(player)
    state.teamCount++
  }
}

export const updatePlayerInTeamReducer = (state, action) => {
  const { player } = action.payload

  const updatedPlayerObj = (prevPlayer) => ({
    ...prevPlayer,
    player_id: player.id,
    name: player.name,
    club_id: player.club_id,
    club: {
      slug: player.club.slug,
    },
    price: player.price,
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

export const setTeamReducer = (state, action) => {
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
  const { player } = action.payload

  if (player.position === PLAYERS.GOA) {
    state.capitan = player
  }
}

export const setDraggablePlayerReducer = (state, action) => {
  const { player_id, position } = action.payload

  if (!position) {
    toast.warning("Iltimos, o'yinchi qo'shing")
    return state
  }

  // const currentPlayer = team.find((p) => p.id === player_id)

  if (
    position === PLAYERS.DEF
    // state.DEF.length > 3 &&
    // state.DEF.length < 5
  ) {
    state.DEF = state.DEF.filter((p) => p.id !== player_id)
    console.log(state.DEF)
    // state[position].push({ id: player_id })
  }
  if (
    position === PLAYERS.MID
    // state.MID.length > 3 &&
    // state.MID.length < 5
  ) {
    state.MID = state.MID.filter((p) => p.id !== player_id)
    state[position].push({ id: player_id })
  }
  if (
    position === PLAYERS.STR
    // state.STR.length > 2 &&
    // state.STR.length < 4
  ) {
    console.log(player_id)
    state.STR = state.STR.filter((p) => p.id !== player_id)
    state[position].push({ id: player_id })
  }
}
