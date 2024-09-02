import { PLAYERS } from 'app/utils/playerTypes.util.'
import { toast } from 'react-toastify'

export const addPlayerToTeamReducer = (state, action) => {
  const { player, type, ignoreExistingPlayers } = action.payload

  const existingPlayer = state.team.find((p) => p.name === player.name)
  if (existingPlayer && !ignoreExistingPlayers) {
    toast.warning('Player already exists')
    return state
  }

  if (type === PLAYERS.GOA && state.GOA.length < 1 && state.team.length < 11) {
    state.GOA.push(player)
    state.team.push(player)
  }
  if (type === PLAYERS.DEF && state.DEF.length < 5 && state.team.length < 11) {
    state.DEF.push(player)
    state.team.push(player)
  }
  if (type === PLAYERS.MID && state.MID.length < 5 && state.team.length < 11) {
    state.MID.push(player)
    state.team.push(player)
  }
  if (type === PLAYERS.STR && state.STR.length < 4 && state.team.length < 11) {
    state.STR.push(player)
    state.team.push(player)
  }
}

export const updatePlayerInTeamReducer = (state, action) => {
  const { player, type } = action.payload

  // const existingPlayer = state.team.find((p) => p.id === player.id)
  // if (existingPlayer) {
  //   toast.warning('Player already exists')
  //   return state
  // }

  if (type === PLAYERS.GOA) {
    // state.GOA.map((p) =>
    //   p.name ? p : { name: player.name, club_id: player.club_id, ...p }
    // )
    state.GOA[0] = {
      ...state.GOA[0],
      name: player.name,
      club_id: player.club_id,
      slug: player.club.slug,
      price: player.price,
    }
  }
  if (type === PLAYERS.DEF) {
    // state.DEF.shift()
    // state.DEF.unshift(player)
    // state.DEF = state.DEF.map((p) => (p.id === player.id ? player : p))
    // state.team = state.team.map((p) => (p.id === player.id ? player : p))
  }
  if (type === PLAYERS.MID) {
    state.MID.shift()
    state.MID.unshift(player)
    // state.MID = state.MID.map((p) => (p.id === player.id ? player : p))
    // state.team = state.team.map((p) => (p.id === player.id ? player : p))
  }
  if (type === PLAYERS.STR) {
    state.STR.shift()
    state.STR.unshift(player)
    // state.STR = state.STR.map((p) => (p.id === player.id ? player : p))
    // state.team = state.team.map((p) => (p.id === player.id ? player : p))
  }
}

export const deletePlayerFromTeamReducer = (state, action) => {
  const { player, type } = action.payload

  if (type === PLAYERS.GOA) {
    state.GOA = state.GOA.filter((p) => p.id !== player.id)
    state.team = state.team.filter((p) => p.id !== player.id)
  }
  if (type === PLAYERS.DEF) {
    state.DEF = state.DEF.filter((p) => p.id !== player.id)
    state.team = state.team.filter((p) => p.id !== player.id)
  }
  if (type === PLAYERS.MID) {
    state.MID = state.MID.filter((p) => p.id !== player.id)
    state.team = state.team.filter((p) => p.id !== player.id)
  }
  if (type === PLAYERS.STR) {
    state.STR = state.STR.filter((p) => p.id !== player.id)
    state.team = state.team.filter((p) => p.id !== player.id)
  }
}
