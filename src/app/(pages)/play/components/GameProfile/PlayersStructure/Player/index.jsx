'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPlayer } from 'app/lib/features/players/players.slice'
import PlayerInfoModal from 'components/PlayerInfoModal'
import Image from 'next/image'

const Player = ({ player }) => {
  const dispatch = useDispatch()
  const { playerPoint } = useSelector((state) => state.playerPoint)
  const [currentPlayerPoint, setCurrentPlayerPoint] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (playerPoint?.length > 0) {
      setCurrentPlayerPoint(
        playerPoint.find((item) => item.player_id === player.player_id)
      )
    } else {
      setCurrentPlayerPoint(null)
    }
  }, [playerPoint, player])

  const imageErr = (e) => {
    e.target.src = '/icons/player.svg'
  }

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  const handleInfoModal = () => {
    toggleModal()
    dispatch(setCurrentPlayer(player.player_id))
  }

  const clubPath = player.name ? player?.club_id?.slug : ''
  const firstName = player.name ? player?.name?.split(' ')[0] : ''
  const lastName = player?.name?.split(' ')[1] ?? ''

  return (
    <>
      <div className="flex h-min select-none flex-col items-center justify-center text-sm text-neutral-700 sm:text-base">
        {!player.name && (
          <>
            <Image
              src="/icons/player-tshirt.svg"
              alt="player tshirt"
              width={48}
              height={48}
              draggable={false}
              className="size-6 xs:size-8 md:size-10 lg:size-8 xl:size-10"
            />
          </>
        )}
        {player.name && (
          <>
            <div className="relative size-6 xs:size-8 md:size-10 lg:size-8 xl:size-10">
              <Image
                src={`/club-svg/${clubPath}/app.svg`}
                alt="player tshirt"
                width={48}
                onClick={handleInfoModal}
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
            <p className="text-shadow line-clamp-1 text-[10px] text-white xs:text-[11px] xs:text-xs md:text-sm">
              {firstName} {lastName.slice(0, 1).toUpperCase()} {lastName && '.'}
            </p>
            <div className="flex items-center gap-0.5 md:gap-1">
              <button onClick={handleInfoModal}>
                <Image
                  width={16}
                  height={16}
                  draggable={false}
                  src="/icons/info.svg"
                  alt="additional info"
                  className="size-3.5 rounded bg-black p-[1px] transition-all hover:scale-105 hover:bg-primary xs:size-4 md:size-5 2xl:size-[18px]"
                />
              </button>
              <div className="flex h-3.5 w-6 cursor-default items-center justify-center rounded bg-primary text-center text-[11px] font-bold shadow shadow-neutral-600 xs:h-4 xs:w-8 xs:text-xs md:h-5 md:text-sm">
                {player.is_captain
                  ? (currentPlayerPoint?.point ?? 0) * 2
                  : (currentPlayerPoint?.point ?? 0)}
              </div>
            </div>
          </>
        )}
      </div>
      <PlayerInfoModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </>
  )
}

export default Player
