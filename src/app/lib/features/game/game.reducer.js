import { PLAYERS } from 'app/utils/playerTypes.util.'
import { toast } from 'react-toastify'

export const addPlayerToTeamReducer = (state, action) => {
  const { player, type } = action.payload

  if (type === PLAYERS.GOA && state.GOA.length < 1 && state.team < 11) {
    const existingPlayer = state.GOA.find((p) => p.id === player.id)
    if (existingPlayer) {
      toast.warning('Player already exists')

      state = state
      return
    }

    state.GOA.push(player)
    state.team++
  }
  if (type === PLAYERS.DEF && state.DEF.length < 5 && state.team < 11) {
    const existingPlayer = state.DEF.find((p) => p.id === player.id)
    if (existingPlayer) {
      toast.warning('Player already exists')
      return state
    }

    state.DEF.push(player)
    state.team++
  }
  if (type === PLAYERS.MID && state.MID.length < 5 && state.team < 11) {
    const existingPlayer = state.DEF.find((p) => p.id === player.id)
    if (existingPlayer) {
      toast.warning('Player already exists')
      return state
    }

    state.MID.push(player)
    state.team++
  }
  if (type === PLAYERS.STR && state.STR.length < 4 && state.team < 11) {
    const existingPlayer = state.DEF.find((p) => p.id === player.id)
    if (existingPlayer) {
      toast.warning('Player already exists')
      return state
    }

    state.STR.push(player)
    state.team++
  }
}

export const deletePlayerFromTeamReducer = (state, action) => {
  const { player, type } = action.payload

  if (type === PLAYERS.GOA) {
    state.GOA = state.GOA.filter((p) => p.id !== player.id)
  }
  if (type === PLAYERS.DEF) {
    state.DEF = state.DEF.filter((p) => p.id !== player.id)
  }
  if (type === PLAYERS.MID) {
    state.MID = state.MID.filter((p) => p.id !== player.id)
  }
  if (type === PLAYERS.STR) {
    state.STR = state.STR.filter((p) => p.id !== player.id)
  }
}
