import { PLAYERS } from 'app/utils/playerTypes.util.'
import { toast } from 'react-toastify'

export const addPlayerToTeamReducer = (state, action) => {
  const { player } = action.payload

  if (
    player.position === PLAYERS.GOA &&
    state.GOA.length < 1 &&
    state.teamCount < 11
  ) {
    state.GOA.push(player)
  }
  if (
    player.position === PLAYERS.DEF &&
    state.DEF.length < 5 &&
    state.teamCount < 11
  ) {
    state.DEF.push(player)
  }
  if (
    player.position === PLAYERS.MID &&
    state.MID.length < 5 &&
    state.teamCount < 11
  ) {
    state.MID.push(player)
    state.teamCount.push(player)
  }
  if (
    player.position === PLAYERS.STR &&
    state.STR.length < 4 &&
    state.teamCount < 11
  ) {
    state.STR.push(player)
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
    state.STR[state.indexes.STR] = {
      ...state.STR[state.indexes.STR],
      name: player.name,
      club_id: player.club_id,
      club: {
        slug: player.club.slug,
      },
      price: player.price,
    }
    state.indexes.STR++
  }
}

export const deletePlayerFromTeamReducer = (state, action) => {
  const { player } = action.payload
  // This is just soft delete!

  const updatedPlayerObj = (prevPlayer) => ({
    ...prevPlayer,
    player_id: null,
    name: null,
    club_id: null,
    club: {
      slug: null,
    },
    price: null,
  })

  // let currentPlayer = state.teamCount.find((p) => p.id === player.id)
  if (player.position === PLAYERS.GOA) {
    // const index = state.GOA.indexOf(player.id)
    const getIndex = (p) => p.id === player.id
    const index = state.GOA.findIndex(getIndex)

    if (index !== -1) {
      state.GOA[index] = updatedPlayerObj(state.GOA[index])
    }
    state.indexes.GOA = index
  }
  if (player.position === PLAYERS.DEF) {
    const getIndex = (p) => p.id === player.id
    const index = state.DEF.findIndex(getIndex)

    if (index !== -1) {
      state.DEF[index] = updatedPlayerObj(state.DEF[index])
    }
    state.indexes.DEF = index
  }
  if (player.position === PLAYERS.MID) {
    const getIndex = (p) => p.id === player.id
    const index = state.MID.findIndex(getIndex)

    if (index !== -1) {
      state.MID[index] = updatedPlayerObj(state.MID[index])
    }
    state.indexes.MID = index
  }
  if (player.position === PLAYERS.STR) {
    const prevPlayer = state.STR[state.indexes.STR]
    if (!prevPlayer.name) {
      toast.warning(
        "Iltimos, joriy o'yinchini o'chirishdan oldin oldingi o'yinchini to'ldiring!"
      )
      return state
    }

    const getIndex = (p) => p.id === player.id
    const index = state.STR.findIndex(getIndex)

    if (index !== -1) {
      state.STR[index] = updatedPlayerObj(state.STR[index])
    }
    state.indexes.STR = index
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
