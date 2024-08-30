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

  return (
    <div className="fade-in-fast flex flex-col items-center justify-center text-sm text-neutral-700 sm:text-base">
      <Image
        src={`/club/${player.club.name.toLowerCase()}/app.svg`}
        alt="player tshirt"
        width={48}
        height={48}
        onError={imageErr}
        className="size-12"
      />
      <p className="text-shadow line-clamp-1 text-xs text-white md:text-sm">
        {player.name}
      </p>
      <div className="flex items-center gap-1">
        {additionalInfo && (
          <button>
            <Image
              width={16}
              height={16}
              src="/icons/info.svg"
              alt="additional info"
              className="size-4 2xl:size-[18px]"
            />
          </button>
        )}
        <div className="h-5 w-8 cursor-default rounded-md bg-white text-center text-xs font-bold shadow shadow-neutral-600 md:text-sm">
          {player.price ?? '00'}
        </div>
        {deletePlayer && (
          <button onClick={handleDeletePlayer}>
            <Image
              width={16}
              height={16}
              src="/icons/delete-player.svg"
              alt="delete player"
              className="size-4 2xl:size-[18px]"
            />
          </button>
        )}
      </div>
    </div>
  )
}

export default Player
