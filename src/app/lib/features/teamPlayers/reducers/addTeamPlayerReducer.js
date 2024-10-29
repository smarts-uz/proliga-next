import { PLAYERS } from 'app/utils/players.util'
import { toast } from 'react-toastify'

export const addTeamPlayerReducer = (state, action) => {
  const { player, team, teamConcat, t } = action.payload
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
    image: player.image,
    percentage: player.percentage ?? null,
  })

  const softDeleteEmptyPlayer = (emptyPlayer) => {
    if (emptyPlayer.position === PLAYERS.GOA) {
      state.GOA = state.GOA.filter((p) => p.id !== emptyPlayer.id)
    }
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
    toast.warning(t('Boshqa oyinchi qoshish mumkin emas!'), { theme: 'dark' })
    return state
  }

  const existingPlayer = teamConcat.find((p) => p.player_id === player.id)
  if (existingPlayer) {
    toast.warning(t('Ushbu oyinchi allaqachon oyinda!'), { theme: 'dark' })
    return state
  }

  const clubId = player?.club?.id || player.club_id.id
  if (state.duplicatesMap[clubId] > maxTeamPlayers - 1) {
    toast.warning(
      t("Ushbu klubdan $ ta oyinchi qo'shib bo'lmaydi!").replace(
        '$',
        maxTeamPlayers
      ),
      { theme: 'dark' }
    )
    state.clubModal = true
    return state
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
    calcTeamPrice()
    evaluateTeamClubId()
    return state
  }
  if (
    player.position === PLAYERS.GOA &&
    state.playersCount.GOA < 1 &&
    state.GOA.length === 0
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatedPlayer(player)
    delete newPlayer.club
    state.GOA.push({ ...newPlayer, id: emptyPlayer.id })
    state.playersCount.GOA++
    calcTeamPrice()
    evaluateTeamClubId()
    return state
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
    state.duplicatesMap[clubId] = (state.duplicatesMap[clubId] || 0) + 1
    calcTeamPrice()
    evaluateTeamClubId()
    return state
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
    calcTeamPrice()
    evaluateTeamClubId()
    return state
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
    calcTeamPrice()
    evaluateTeamClubId()
    return state
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
    calcTeamPrice()
    evaluateTeamClubId()
    return state
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
    calcTeamPrice()
    evaluateTeamClubId()
    return state
  }
  if (
    player.position === PLAYERS.STR &&
    state.playersCount.STR >= state.STR.length &&
    state.STR.length < 3
  ) {
    softDeleteEmptyPlayer(emptyPlayer)
    const newPlayer = createUpdatedPlayer(player)
    delete newPlayer.club
    state.STR.push({ ...newPlayer, id: emptyPlayer.id })
    state.playersCount.STR++
    calcTeamPrice()
    evaluateTeamClubId()
    return state
  }
}
