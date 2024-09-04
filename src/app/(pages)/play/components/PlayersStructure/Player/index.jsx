import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { softDeletePlayerFromTeam } from 'app/lib/features/game/game.slice'
import ConfirmationModal from 'components/ConfirmationModal'

const Player = ({ player, additionalInfo = true, deletePlayer = true }) => {
  const dispatch = useDispatch()
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

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
  const handleOnDrag = (e, player_id) => {
    e.dataTransfer.setData('player_id', player_id)
  }

  const handleDeletePlayer = () => {
    dispatch(softDeletePlayerFromTeam({ player }))
    toggleDeleteModal()
  }
  const imageErr = (e) => {
    e.target.src = '/icons/player-tshirt.svg'
  }
  const clubPath = player.name ? player.club.slug : ''
  const firstName = player.name ? player?.name?.split(' ')[0] : ''
  const lastName = player?.name?.split(' ')[1] ?? ''

  return (
    <>
      <div
        className={`fade-in-fast flex h-min flex-col items-center justify-center text-sm text-neutral-700 active:rounded-sm active:opacity-70 sm:text-base ${player.name ? 'cursor-default' : 'cursor-grab'} `}
        draggable={player.name ? false : true}
        onDragStart={(e) => handleOnDrag(e, player.id)}
      >
        {!player.name && (
          <>
            <Image
              src="/icons/player-tshirt.svg"
              alt="player tshirt"
              width={48}
              height={48}
              // draggable={false}
              className="size-6 active:rounded-md active:shadow active:shadow-white xs:size-8 md:size-12"
            />
          </>
        )}
        {player.name && (
          <>
            <Image
              src={`/club/${clubPath}/app.svg`}
              alt="player tshirt"
              width={48}
              height={48}
              onError={imageErr}
              className="size-6 xs:size-8 md:size-12"
            />
            <p className="text-shadow line-clamp-1 text-[11px] text-white xs:text-xs md:text-sm">
              {firstName} {lastName.slice(0, 1).toUpperCase()} {lastName && '.'}
            </p>
            <div className="flex items-center gap-1">
              {additionalInfo && (
                <button>
                  <Image
                    width={16}
                    height={16}
                    src="/icons/info.svg"
                    alt="additional info"
                    className="size-3 hover:opacity-70 xs:size-4 2xl:size-[18px]"
                  />
                </button>
              )}
              <div className="flex h-4 w-6 cursor-default items-center justify-center rounded-md bg-white text-center text-[11px] font-bold shadow shadow-neutral-600 xs:w-8 xs:text-xs md:h-5 md:text-sm">
                {player.price ?? '00'}
              </div>
              {deletePlayer && (
                <button onClick={toggleDeleteModal}>
                  <Image
                    width={16}
                    height={16}
                    src="/icons/delete-player.svg"
                    alt="delete player"
                    className="size-3 hover:opacity-70 xs:size-4 2xl:size-[18px]"
                  />
                </button>
              )}
            </div>
          </>
        )}
      </div>
      {deleteModalVisible && (
        <ConfirmationModal
          onConfirm={handleDeletePlayer}
          onCancel={toggleDeleteModal}
        />
      )}
    </>
  )
}

export default Player
