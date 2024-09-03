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
    state.GOA = state.GOA.map((p, i) =>
      !p.name && i === state.indexes.GOA ? newPlayer : p
    )

    state.indexes.GOA++
  }
  if (player.position === PLAYERS.DEF && state.indexes.DEF < state.DEF.length) {
    const newPlayer = updatedPlayerObj(state.DEF[state.indexes.DEF])
    state.DEF = state.DEF.map((p, i) =>
      !p.name && i === state.indexes.DEF ? newPlayer : p
    )

    state.indexes.DEF++
  }
  if (player.position === PLAYERS.MID && state.indexes.MID < state.MID.length) {
    const newPlayer = updatedPlayerObj(state.MID[state.indexes.MID])
    state.MID = state.MID.map((p, i) =>
      !p.name && i === state.indexes.MID ? newPlayer : p
    )

    state.indexes.MID++
  }
  if (player.position === PLAYERS.STR && state.indexes.STR < state.STR.length) {
    const newPlayer = updatedPlayerObj(state.STR[state.indexes.STR])
    state.STR = state.STR.map((p, i) =>
      !p.name && i === state.indexes.STR ? newPlayer : p
    )

    state.indexes.STR++
  }
}

export const deletePlayerFromTeamReducer = (state, action) => {
  const { player } = action.payload

  const compare = (a, b) => {
    const c = { ...a }
    console.log(c, b)
    if (c.name < b.name) {
      console.log(c, b)
      return -1
    }
    if (c.name > b.name) {
      console.log(c, b)

      return 1
    }
    return 0
  }

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
    const getIndex = (p) => p.id === player.id
    const index = state.GOA.findIndex(getIndex)

    if (index !== -1) {
      state.GOA[index] = deletedPlayerObj(state.GOA[index])
    }
    state.indexes.GOA = index
  }
  if (player.position === PLAYERS.DEF) {
    const getIndex = (p) => p.id === player.id
    const index = state.DEF.findIndex(getIndex)

    if (index !== -1) {
      state.DEF[index] = deletedPlayerObj(state.DEF[index])
    }
    state.indexes.DEF = index
  }
  if (player.position === PLAYERS.MID) {
    const getIndex = (p) => p.id === player.id
    const index = state.MID.findIndex(getIndex)

    if (index !== -1) {
      state.MID[index] = deletedPlayerObj(state.MID[index])
    }
    state.MID = state.MID.sort(compare)

    state.indexes.MID--
  }
  if (player.position === PLAYERS.STR) {
    const getIndex = (p) => p.id === player.id
    const index = state.STR.findIndex(getIndex)

    if (index !== -1) {
      state.STR[index] = deletedPlayerObj(state.STR[index])
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
