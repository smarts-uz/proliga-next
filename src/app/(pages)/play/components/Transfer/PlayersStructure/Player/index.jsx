'use client'

import Image from 'next/image'
import ConfirmationModal from 'components/ConfirmationModal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTeamPlayer } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { motion } from 'framer-motion'

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

  const handleDeletePlayer = () => {
    dispatch(deleteTeamPlayer({ player }))
    toggleDeleteModal()
  }

  const imageErr = (e) => {
    e.target.src = '/icons/player-tshirt.svg'
  }

  const clubPath = player.name ? player?.club_id?.slug : ''
  const firstName = player.name ? player?.name?.split(' ')[0] : ''
  const lastName = player?.name?.split(' ')[1] ?? ''

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-min select-none flex-col items-center justify-center text-sm text-neutral-700 sm:text-base"
      >
        {!player.name && (
          <>
            <Image
              src="/icons/player-tshirt.svg"
              alt="player tshirt"
              width={48}
              height={48}
              draggable={false}
              className="size-5 xs:size-7 md:size-10 lg:size-8 xl:size-10"
            />
          </>
        )}
        {player.name && (
          <>
            <div className="relative size-5 xs:size-7 md:size-10 lg:size-8 xl:size-10">
              <Image
                src={`/club/${clubPath}/app.svg`}
                alt="player tshirt"
                width={48}
                height={48}
                onError={imageErr}
                draggable={false}
                className="h-full w-full"
              />
              {player.is_captain && (
                <Image
                  src="/icons/captain-badge.svg"
                  alt="captain"
                  width={16}
                  height={16}
                  draggable={false}
                  className="absolute -right-1 bottom-0 size-3 md:size-4 2xl:size-5"
                />
              )}
            </div>
            <p className="text-shadow line-clamp-1 text-[11px] text-white xs:text-xs md:text-sm">
              {firstName} {lastName.slice(0, 1).toUpperCase()} {lastName && '.'}
            </p>
            <div className="flex items-center gap-1">
              {additionalInfo && (
                <button>
                  <Image
                    width={16}
                    height={16}
                    draggable={false}
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
      </motion.div>
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