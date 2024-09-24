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
