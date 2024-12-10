import Player from './Player'
import { useSelector } from 'react-redux'
import StadiumSpinner from '../../StadiumSpinner'

const ProfilePlayersStructure = () => {
  const { GOA, DEF, MID, STR, isLoading } = useSelector(
    (state) => state.teamPlayers
  )

  return (
    <div className="fade-in-fast absolute bottom-0 left-0 right-0 top-0 z-10 grid grid-rows-4 pb-3 pt-4 sm:py-2 sm:pb-0 sm:pt-6 md:pb-8 md:pt-8">
      {isLoading ? (
        <StadiumSpinner />
      ) : (
        <>
          <div className={`flex w-full items-start justify-center`}>
            {GOA.map((player) => (
              <Player key={player.id} player={player} />
            ))}
          </div>
          <div
            className={`flex items-start justify-evenly gap-0.5 px-6 2xs:px-10 xs:gap-1 xl:gap-0 xl:px-14`}
          >
            {DEF.map((player) => (
              <Player key={player.id} player={player} />
            ))}
          </div>
          <div className="flex items-start justify-evenly gap-0.5 px-8 2xs:px-11 sm:gap-1 md:gap-4 md:px-4 xl:gap-0 xl:px-10">
            {MID.map((player) => (
              <Player key={player.id} player={player} />
            ))}
          </div>
          <div className="flex items-start justify-evenly gap-0 px-0 md:px-4">
            {STR.map((player) => (
              <Player key={player.id} player={player} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ProfilePlayersStructure
