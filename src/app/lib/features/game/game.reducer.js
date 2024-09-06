import { toast } from 'react-toastify'
import { PLAYERS } from 'app/utils/players.util'

export const updatePlayerInTeamReducer = (state, action) => {
  const { player, team, teamConcat } = action.payload

  const createUpdatePlayer = (prevPlayer) => ({
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
      state.indexes.DEF--
    }
    if (emptyPlayer.position === PLAYERS.MID) {
      state.MID = state.MID.filter((p) => p.id !== emptyPlayer.id)
      state.indexes.MID--
    }
    if (emptyPlayer.position === PLAYERS.STR) {
      state.STR = state.STR.filter((p) => p.id !== emptyPlayer.id)
      state.indexes.STR--
    }
  }

  const emptyPlayer = teamConcat.find((player) => !player.name)
  if (!emptyPlayer) {
    toast.warning('No more players available')
    return
  }

  if (
    state.GOA.length > 0 &&
    player.position === PLAYERS.GOA &&
    state.indexes.GOA < 1
  ) {
    const newPlayer = createUpdatePlayer(state.GOA[state.indexes.GOA])
    state.GOA[state.indexes.GOA] = newPlayer
    state.indexes.GOA++
  }
  //goa
  if (player.position === PLAYERS.DEF && state.indexes.DEF < state.DEF.length) {
    const newPlayer = createUpdatePlayer(state.DEF[state.indexes.DEF])
    state.DEF[state.indexes.DEF] = newPlayer
    state.indexes.DEF++
  }
  if (
    player.position === PLAYERS.DEF &&
    state.indexes.DEF >= state.DEF.length &&
    state.DEF.length < 5
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatePlayer(player)
    delete newPlayer.club
    state.DEF.push({ ...newPlayer, id: emptyPlayer.id })
    state.playersCount.DEF++
    state.indexes.DEF++
    state.teamCount++
  }
  // mid
  if (player.position === PLAYERS.MID && state.indexes.MID < state.MID.length) {
    const newPlayer = createUpdatePlayer(state.MID[state.indexes.MID])
    state.MID[state.indexes.MID] = newPlayer
    state.indexes.MID++
  }
  if (
    player.position === PLAYERS.MID &&
    state.indexes.MID >= state.MID.length &&
    state.MID.length < 5
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatePlayer(player)
    delete newPlayer.club
    state.MID.push({ ...newPlayer, id: emptyPlayer.id })
    state.playersCount.MID++
    state.indexes.MID++
    state.teamCount++
  }
  //str
  if (player.position === PLAYERS.STR && state.indexes.STR < state.STR.length) {
    const newPlayer = createUpdatePlayer(state.STR[state.indexes.STR])
    state.STR[state.indexes.STR] = newPlayer
    state.indexes.STR++
    state.playersCount.STR++
  }
  if (
    player.position === PLAYERS.STR &&
    state.indexes.STR >= state.STR.length &&
    state.STR.length < 4
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatePlayer(player)
    delete newPlayer.club
    state.STR.push({ ...newPlayer, id: emptyPlayer.id })
    state.indexes.STR++
    state.teamCount++
  }
}

export const softDeletePlayerFromTeamReducer = (state, action) => {
  const { player } = action.payload

  const deletedPlayerObj = (prevPlayer) => ({
    ...prevPlayer,
    player_id: null,
    name: null,
    club_id: null,
    price: null,
  })

  if (
    !state.playersCount.STR > 2 &&
    !state.playersCount.MID > 3 &&
    !state.playersCount.DEF > 3
  ) {
    toast.warning(
      'You need at least 2 STR players, 3 MID players and 3 DEF players'
    )
    return state
  }

  if (player.position === PLAYERS.GOA) {
    const currentPlayer = player
    state.GOA = state.GOA.filter((p) => p.id !== player.id)
    state.GOA.push(deletedPlayerObj(currentPlayer))
    state.indexes.GOA--
    state.playersCount.GOA--
    state.teamCount--
  }
  if (player.position === PLAYERS.DEF) {
    const currentPlayer = player
    state.DEF = state.DEF.filter((p) => p.id !== player.id)
    state.DEF.push(deletedPlayerObj(currentPlayer))
    state.indexes.DEF--
    state.playersCount.DEF--
    state.teamCount--
  }
  if (player.position === PLAYERS.MID) {
    const currentPlayer = player
    state.MID = state.MID.filter((p) => p.id !== player.id)
    state.MID.push(deletedPlayerObj(currentPlayer))
    state.indexes.MID--
    state.playersCount.MID--
    state.teamCount--
  }
  if (player.position === PLAYERS.STR) {
    const currentPlayer = player
    state.STR = state.STR.filter((p) => p.id !== player.id)
    state.STR.push(deletedPlayerObj(currentPlayer))
    state.indexes.STR--
    state.playersCount.STR--
    state.teamCount--
  }
}

export const setTeamPlayersReducer = (state, action) => {
  const team = action.payload
  team.forEach((player) => {
    if (player.position === PLAYERS.GOA) {
      state.GOA.push(player)
      if (player.name) {
        state.teamCount++
        state.playersCount.GOA++
        state.indexes.GOA++
      }
    }
    if (player.position === PLAYERS.DEF) {
      state.DEF.push(player)
      if (player.name) {
        state.teamCount++
        state.indexes.DEF++
        state.playersCount.DEF++
      }
    }
    if (player.position === PLAYERS.MID) {
      state.MID.push(player)
      if (player.name) {
        state.teamCount++
        state.playersCount.MID++
        state.indexes.MID++
      }
    }
    if (player.position === PLAYERS.STR) {
      state.STR.push(player)
      if (player.name) {
        state.playersCount.STR++
        state.teamCount++
        state.indexes.STR++
      }
    }
  })
}
