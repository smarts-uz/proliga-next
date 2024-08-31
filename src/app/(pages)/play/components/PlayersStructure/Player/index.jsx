import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { deletePlayerFromTeam } from 'app/lib/features/game/game.slice'

const Player = ({ player, additionalInfo = true, deletePlayer = true }) => {
  const dispatch = useDispatch()

  const handleDeletePlayer = () => {
    dispatch(deletePlayerFromTeam({ player, type: player.position }))
  }
  const imageErr = (e) => {
    e.target.src = '/icons/player-tshirt.svg'
  }
  const clubPath = player.club.slug
  const firstName = player.name.split(' ')[0] ?? ''
  const lastName = player.name.split(' ')[1]
    ? player.name.split(' ')[1].slice(0, 1).toUpperCase()
    : ''

  return (
    <div className="fade-in-fast flex flex-col items-center justify-center text-sm text-neutral-700 sm:text-base">
      <Image
        src={`/club/${clubPath}/app.svg`}
        alt="player tshirt"
        width={48}
        height={48}
        onError={imageErr}
        className="size-6 xs:size-8 md:size-12"
      />
      <p className="text-shadow line-clamp-1 text-[11px] text-white xs:text-xs md:text-sm">
        {firstName} {lastName} {lastName && '.'}
      </p>
      <div className="flex items-center gap-1">
        {additionalInfo && (
          <button>
            <Image
              width={16}
              height={16}
              src="/icons/info.svg"
              alt="additional info"
              className="size-3 xs:size-4 2xl:size-[18px]"
            />
          </button>
        )}
        <div className="flex h-4 w-6 cursor-default items-center justify-center rounded-md bg-white text-center text-[11px] font-bold shadow shadow-neutral-600 xs:w-8 xs:text-xs md:h-5 md:text-sm">
          {player.price ?? '00'}
        </div>
        {deletePlayer && (
          <button onClick={handleDeletePlayer}>
            <Image
              width={16}
              height={16}
              src="/icons/delete-player.svg"
              alt="delete player"
              className="size-3 xs:size-4 2xl:size-[18px]"
            />
          </button>
        )}
      </div>
    </div>
  )
}

export default Player
