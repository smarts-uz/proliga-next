/* eslint-disable @next/next/no-img-element */
'use client'

import GameProfile from '../GameProfile'
import Statistics from '../Statistics'
import Transfer from '../Transfer'
import Journal from '../Journal'
import Tournament from '../Tournament'
import Gutter from 'components/Gutter'
import { TABS } from '../../../../utils/tabs.util'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useState } from 'react'
import { setTab } from 'app/lib/features/tours/tours.slice'
import { setTeamBalance } from 'app/lib/features/tourTeams/tourTeams.slice'
import { fetchCurrentTeam } from 'app/lib/features/currentTeam/currentTeam.thunk'
import { fetchTeamPlayers } from 'app/lib/features/teamPlayers/teamPlayers.thunk'
import { fetchPlayerPoint } from 'app/lib/features/playerPoint/playerPoint.thunk'
import { fetchTourTeams } from 'app/lib/features/tourTeams/tourTeams.thunk'
import { fetchTopPlayers } from 'app/lib/features/players/players.thunk'
import { fetchTopTeams } from 'app/lib/features/teams/teams.thunk'
import { fetchTours } from 'app/lib/features/tours/tours.thunk'
import ModalBanner from 'components/Banners/Modal'
import LeftSideBanner from 'components/Banners/LeftSide'
import RightSideBanner from 'components/Banners/RightSide'

const CurrentTab = ({ currentTab, paramsId }) => {
  const dispatch = useDispatch()
  const { userAuth, userTable } = useSelector((state) => state.auth)
  const { currentTour } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { currentCompetition } = useSelector((store) => store.competition)
  const { GOA, DEF, MID, STR, teamPrice } = useSelector(
    (store) => store.teamPlayers
  )
  const { players, topPlayers } = useSelector((store) => store.players)
  const [isModalOpen, setModalOpen] = useState(true)
  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )

  useEffect(() => {
    if (!currentTeam?.is_team_created) {
      dispatch(setTab(TABS.Transfer))
    }
  }, [dispatch, currentTeam?.is_team_created])

  useEffect(() => {
    if (userAuth && userTable?.id && paramsId) {
      const fetch = async () => {
        dispatch(fetchCurrentTeam({ id: paramsId, user_id: userTable?.id }))
      }
      fetch()
    }
  }, [userAuth, paramsId, userTable, dispatch])

  useEffect(() => {
    if (paramsId && currentTour?.id) {
      const fetch = async () => {
        dispatch(
          fetchTeamPlayers({
            team_id: paramsId,
            tour_id: currentTour.id,
          })
        )
      }
      fetch()
    }
  }, [paramsId, userTable, currentTour, dispatch])

  useEffect(() => {
    if (paramsId) {
      const fetch = async () => {
        dispatch(fetchTourTeams({ team_id: paramsId }))
      }
      fetch()
    }
  }, [paramsId, userTable, currentTour, dispatch])

  useEffect(() => {
    if (currentTeam?.competition_id) {
      const fetch = async () => {
        dispatch(
          fetchTours({
            competition_id: currentTeam.competition_id.id,
            registered_tour_id: currentTeam?.registered_tour_id,
          })
        )
      }
      fetch()
    }
  }, [currentTeam, dispatch])

  useEffect(() => {
    dispatch(
      setTeamBalance({
        price: teamPrice ?? 0,
        balance: currentTeam?.balance ?? 100,
      })
    )
  }, [teamPrice, dispatch, currentTeam])

  useEffect(() => {
    const teamPlayersId = []
    teamConcat.forEach((player) => {
      player.name && teamPlayersId.push(player.player_id)
    })

    if (
      currentTour?.id &&
      currentTeam?.competition_id?.id &&
      teamPlayersId?.length > 0
    ) {
      dispatch(
        fetchPlayerPoint({
          competition_id: currentTeam.competition_id.id,
          tour_id: currentTour.id,
          playerIds: teamPlayersId,
        })
      )
    }
  }, [dispatch, currentTour, currentTeam, teamConcat])

  useEffect(() => {
    if (currentCompetition?.id) {
      dispatch(
        fetchTopTeams({
          competition_id: currentCompetition?.id,
        })
      )
    }
  }, [currentCompetition, dispatch])

  useEffect(() => {
    if (
      currentCompetition?.id &&
      players?.length > 0 &&
      topPlayers.length === 0
    ) {
      dispatch(
        fetchTopPlayers({
          competition_id: currentCompetition?.id,
        })
      )
    }
  }, [currentCompetition?.id, dispatch, players?.length, topPlayers.length])

  return (
    <Gutter>
      <div className="flex gap-1.5">
        <LeftSideBanner />
        {currentTab === TABS.GameProfile && <GameProfile />}
        {currentTab === TABS.Transfer && <Transfer paramsId={paramsId} />}
        {currentTab === TABS.Statistics && <Statistics />}
        {currentTab === TABS.Journal && <Journal />}
        {currentTab === TABS.Tournament && <Tournament />}
        <RightSideBanner />
      </div>
      <ModalBanner isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </Gutter>
  )
}

export default CurrentTab
