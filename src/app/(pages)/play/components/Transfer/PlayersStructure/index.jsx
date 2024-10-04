import Player from './Player'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useCallback } from 'react'
import ConfirmationModal from 'components/ConfirmationModal'
import PlayerTransferModal from './TransferModal'
import { deleteTeamPlayer } from 'app/lib/features/teamPlayers/teamPlayers.slice'

const TransferPlayersStructure = () => {
  const dispatch = useDispatch()
  const { GOA, DEF, MID, STR } = useSelector((state) => state.teamPlayers)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const [isModalOpen, setModalOpen] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(null)

  const toggleDeleteModal = () => {
    if (deleteModalVisible) {
      setDeleteModalVisible(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setDeleteModalVisible(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  const handleDeletePlayer = () => {
    dispatch(
      deleteTeamPlayer({
        player: currentPlayer,
        is_team_created: currentTeam?.is_team_created,
      })
    )
    toggleDeleteModal()
  }

  const toggleModal = useCallback(() => {
    if (isModalOpen) {
      setModalOpen(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      setModalOpen(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }, [isModalOpen])

  return (
    <>
      <section className="absolute bottom-0 left-0 right-0 top-0 z-10 grid grid-rows-4 pb-3 pt-4 sm:py-2 sm:pb-0 sm:pt-6 md:pb-8 md:pt-8">
        <div className={`flex w-full items-start justify-center`}>
          {GOA.map((player) => (
            <Player
              key={player.id}
              player={player}
              setPlayer={setCurrentPlayer}
              toggleDeleteModal={toggleDeleteModal}
              toggleModal={toggleModal}
            />
          ))}
        </div>
        <div
          className={`flex items-start justify-evenly gap-0.5 px-6 2xs:px-10 xs:gap-1 xl:gap-0 xl:px-14`}
        >
          {DEF.map((player) => (
            <Player
              key={player.id}
              player={player}
              setPlayer={setCurrentPlayer}
              toggleDeleteModal={toggleDeleteModal}
              toggleModal={toggleModal}
            />
          ))}
        </div>
        <div className="flex items-start justify-evenly gap-0.5 px-8 2xs:px-11 sm:gap-1 md:gap-4 md:px-4 xl:gap-0 xl:px-10">
          {MID.map((player) => (
            <Player
              key={player.id}
              player={player}
              setPlayer={setCurrentPlayer}
              toggleDeleteModal={toggleDeleteModal}
              toggleModal={toggleModal}
            />
          ))}
        </div>
        <div className="flex items-start justify-evenly gap-0 px-0 md:px-4">
          {STR.map((player) => (
            <Player
              key={player.id}
              player={player}
              setPlayer={setCurrentPlayer}
              toggleDeleteModal={toggleDeleteModal}
              toggleModal={toggleModal}
            />
          ))}
        </div>
      </section>
      {deleteModalVisible && (
        <ConfirmationModal
          onConfirm={handleDeletePlayer}
          onCancel={toggleDeleteModal}
        />
      )}
      {isModalOpen && (
        <PlayerTransferModal
          prevPlayer={currentPlayer}
          handleModal={toggleModal}
          currentTeam={currentTeam}
        />
      )}
    </>
  )
}

export default TransferPlayersStructure
