import Image from 'next/image'
import Gutter from '../../../../../components/Gutter'
import GameBrief from './GameBrief'
import ProfileStadiumForm from './ProfileStadiumForm'
import ProfilePlayersStructure from './PlayersStructure'
import { useDispatch, useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import { useEffect, useMemo } from 'react'
import { fetchPlayerPoint } from 'app/lib/features/playerPoint/playerPoint.thunk'

const GameProfile = () => {
  const dispatch = useDispatch()
  const { currentTour } = useSelector((store) => store.tours)
  const { currentTeam } = useSelector((store) => store.currentTeam)
  const { GOA, DEF, MID, STR } = useSelector((store) => store.teamPlayers)
  const teamConcat = useMemo(
    () => GOA.concat(DEF, MID, STR),
    [GOA, DEF, MID, STR]
  )

  // useEffect(() => {
  //   const teamPlayersId = []
  //   teamConcat.forEach((player) => {
  //     player.name && teamPlayersId.push(player.player_id)
  //   })

  //   if (currentTour?.id && currentTeam?.competition_id?.id) {
  //     dispatch(
  //       fetchPlayerPoint({
  //         competition_id: currentTeam.competition_id.id,
  //         tour_id: currentTour.id,
  //         playerIds: teamPlayersId,
  //       })
  //     )
  //   }
  // }, [dispatch, currentTour, currentTeam, teamConcat])

  return (
    <Gutter>
      <main className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4">
        <div className="h-full w-full lg:w-1/2 xl:w-[45%]">
          <div className="relative h-full w-full">
            <Image
              src="/icons/stadium.svg"
              alt="stadium"
              width={700}
              height={600}
              className="w-full rounded-sm"
            />
            <ProfilePlayersStructure />
          </div>
          {currentTour?.status === TOUR.notStartedTransfer && (
            <ProfileStadiumForm />
          )}
        </div>
        <GameBrief />
      </main>
    </Gutter>
  )
}

export default GameProfile
