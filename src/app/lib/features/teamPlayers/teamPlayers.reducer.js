import { PLAYERS } from 'app/utils/players.util'
import { toast } from 'react-toastify'

export const deleteTeamPlayerReducer = (state, action) => {
  const { player } = action.payload

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
  }
  if (player.position === PLAYERS.DEF) {
    if (state.playersCount.DEF < 4) {
      toast.warning('Sizda kamida 3 darvozabon bolishi shart!')
      return state
    }
    state.DEF = state.DEF.filter((p) => p.id !== player.id)
    state.DEF.push(deletedPlayerObj(player))
    state.playersCount.DEF--
  }
  if (player.position === PLAYERS.MID) {
    if (state.playersCount.MID < 4) {
      toast.warning('Sizda kamida 3 yarim himoyachi bolishi shart!')
      return state
    }
    state.MID = state.MID.filter((p) => p.id !== player.id)
    state.MID.push(deletedPlayerObj(player))
    state.playersCount.MID--
  }
  if (player.position === PLAYERS.STR) {
    if (state.playersCount.STR < 3) {
      toast.warning('Sizda kamida 2 hujumchi bolishi shart!')
      return state
    }
    state.STR = state.STR.filter((p) => p.id !== player.id)
    state.STR.push(deletedPlayerObj(player))
    state.playersCount.STR--
  }
}

export const addTeamPlayerReducer = (state, action) => {
  const { player, team, teamConcat } = action.payload

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
  }
  if (
    player.position === PLAYERS.MID &&
    state.playersCount.MID >= state.MID.length &&
    state.MID.length < 5
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatedPlayer(player)
    delete newPlayer.club
    state.MID.push({ ...newPlayer, id: emptyPlayer.id })
    state.playersCount.MID++
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
  }
  if (
    player.position === PLAYERS.STR &&
    state.playersCount.STR >= state.STR.length &&
    state.STR.length < 4
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatedPlayer(player)
    delete newPlayer.club
    state.STR.push({ ...newPlayer, id: emptyPlayer.id })
    state.playersCount.STR++
  }
}
