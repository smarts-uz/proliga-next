import { PLAYERS } from 'app/utils/players.util'
import { toast } from 'react-toastify'

export const swapTeamPlayerReducer = (state, action) => {
  const { player, team, previousPlayer, handleModal, t } = action.payload
  const maxTeamPlayers = team.transfers_from_one_team ?? 2

  const evaluateTeamClubId = () => {
    state.duplicatesMap = {}
    const newTeam = [...state.GOA, ...state.DEF, ...state.MID, ...state.STR]

    newTeam.forEach((player) => {
      const clubSlug = player?.club_id?.id ?? ''

      if (player.name) {
        state.duplicatesMap[clubSlug] = (state.duplicatesMap[clubSlug] || 0) + 1
      }
    })
  }

  const calcTeamPrice = () => {
    state.teamPrice =
      state.GOA.reduce((acc, player) => acc + player.price, 0) +
      state.DEF.reduce((acc, player) => acc + player.price, 0) +
      state.MID.reduce((acc, player) => acc + player.price, 0) +
      state.STR.reduce((acc, player) => acc + player.price, 0)
  }

  const createUpdatedPlayer = (prevPlayer, newPlayer) => ({
    ...prevPlayer,
    id: prevPlayer.id,
    club_id: {
      slug: newPlayer.club.slug,
      id: newPlayer.club.id,
    },
    name: newPlayer.name,
    position: newPlayer.position,
    player_id: newPlayer.id,
    price: newPlayer.price,
    competition_id: team.competition_id.id,
    user_id: team.user_id,
    image: newPlayer.image,
    percentage: newPlayer.percentage ?? null,
  })

  const clubId = player?.club?.id || player.club_id.id

  if (state.duplicatesMap[clubId] > maxTeamPlayers - 1) {
    toast.warning(
      `Ushbu klubdan ${maxTeamPlayers} ta oyinchi qo'shib bo'lmaydi!`,
      { theme: 'dark' }
    )
    return state
  }

  if (state.GOA.length > 0 && player.position === PLAYERS.GOA) {
    const prevPlayer = state.GOA.find((p) => previousPlayer.id === p.id)
    const prevPlayerIndex = state.GOA.findIndex(
      (p) => previousPlayer.id === p.id
    )
    state.GOA[prevPlayerIndex] = createUpdatedPlayer(prevPlayer, player)
    evaluateTeamClubId()
    calcTeamPrice()
    handleModal()
    toast.success("Oyinchi muvaffaqiyatli o'zgartirildi!", { theme: 'dark' })
    return state
  }
  if (player.position === PLAYERS.DEF && state.DEF.length > 0) {
    const prevPlayer = state.DEF.find((p) => previousPlayer.id === p.id)
    const prevPlayerIndex = state.DEF.findIndex(
      (p) => previousPlayer.id === p.id
    )
    state.DEF[prevPlayerIndex] = createUpdatedPlayer(prevPlayer, player)
    evaluateTeamClubId()
    calcTeamPrice()
    handleModal()
    toast.success("Oyinchi muvaffaqiyatli o'zgartirildi!", { theme: 'dark' })
    return state
  }
  if (player.position === PLAYERS.MID && state.MID.length > 0) {
    const prevPlayer = state.MID.find((p) => previousPlayer.id === p.id)
    const prevPlayerIndex = state.MID.findIndex(
      (p) => previousPlayer.id === p.id
    )
    state.MID[prevPlayerIndex] = createUpdatedPlayer(prevPlayer, player)
    evaluateTeamClubId()
    calcTeamPrice()
    handleModal()
    toast.success("Oyinchi muvaffaqiyatli o'zgartirildi!", { theme: 'dark' })
    return state
  }
  if (player.position === PLAYERS.STR && state.STR.length > 0) {
    const prevPlayer = state.STR.find((p) => previousPlayer.id === p.id)
    const prevPlayerIndex = state.STR.findIndex(
      (p) => previousPlayer.id === p.id
    )
    state.STR[prevPlayerIndex] = createUpdatedPlayer(prevPlayer, player)
    evaluateTeamClubId()
    calcTeamPrice()
    handleModal()
    toast.success("Oyinchi muvaffaqiyatli o'zgartirildi!", { theme: 'dark' })
    return state
  }
}
