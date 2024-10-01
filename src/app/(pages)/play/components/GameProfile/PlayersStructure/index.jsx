import Player from './Player'
import PlayerInfoModal from 'components/PlayerInfoModal'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setCurrentPlayer } from 'app/lib/features/players/players.slice'

const ProfilePlayersStructure = ({ allowDelete = true }) => {
  const dispatch = useDispatch()
  const [infoModal, setInfoModal] = useState(false)
  const { GOA, DEF, MID, STR } = useSelector((state) => state.teamPlayers)

  const handleInfoModal = (player) => {
    dispatch(setCurrentPlayer(player.player_id))
    if (infoModal) {
      setInfoModal(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setInfoModal(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  const toggleModal = () => {
    if (infoModal) {
      setInfoModal(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setInfoModal(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  return (
    <>
      <div className="fade-in-fast absolute bottom-0 left-0 right-0 top-0 z-10 grid grid-rows-4 pb-3 pt-4 sm:py-2 sm:pb-0 sm:pt-6 md:pb-8 md:pt-8">
        <div className={`flex w-full items-start justify-center`}>
          {GOA.map((player) => (
            <Player
              handleInfoModal={handleInfoModal}
              deletePlayer={allowDelete}
              key={player.id}
              player={player}
            />
          ))}
        </div>
        <div
          className={`flex items-start justify-evenly gap-0.5 px-6 2xs:px-10 xs:gap-1 xl:gap-0 xl:px-14`}
        >
          {DEF.map((player) => (
            <Player
              handleInfoModal={handleInfoModal}
              deletePlayer={allowDelete}
              key={player.id}
              player={player}
            />
          ))}
        </div>
        <div className="flex items-start justify-evenly gap-0.5 px-8 2xs:px-11 sm:gap-1 md:gap-4 md:px-4 xl:gap-0 xl:px-10">
          {MID.map((player) => (
            <Player
              deletePlayer={allowDelete}
              key={player.id}
              player={player}
              handleInfoModal={handleInfoModal}
            />
          ))}
        </div>
        <div className="flex items-start justify-evenly gap-0 px-0 md:px-4">
          {STR.map((player) => (
            <Player
              key={player.id}
              player={player}
              handleInfoModal={handleInfoModal}
              deletePlayer={allowDelete}
            />
          ))}
        </div>
      </div>
      {infoModal && (
        <PlayerInfoModal infoModal={infoModal} toggleModal={toggleModal} />
      )}
    </>
  )
}

export default ProfilePlayersStructure
