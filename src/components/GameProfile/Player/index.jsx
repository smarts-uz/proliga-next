import Image from 'next/image'

const Player = () => {
  const name = 'Player Name'
  const score = 10
  const additionalInfo = true
  const deletePlayer = true

  const sideBtnStyles = 'size-[18px]'

  return (
    <div className="flex flex-col items-center justify-center text-neutral-700">
      <Image
        src="/icons/player-tshirt.svg"
        alt="player tshirt"
        width={48}
        height={48}
        className="w-16"
      />
      <p className='text-white ' >{name}</p>
      <div className="flex items-center gap-1">
        <button>
          <Image
            width={16}
            height={16}
            src="/icons/info.svg"
            alt="additional info"
            className={sideBtnStyles}
          />
        </button>
        <div className="cursor-default rounded-md bg-white px-2 font-bold">
          {score}
        </div>
        {deletePlayer && (
          <button>
            <Image
              width={16}
              height={16}
              src="/icons/delete-player.svg"
              alt="delete player"
              className={sideBtnStyles}
            />
          </button>
        )}
      </div>
    </div>
  )
}

export default Player
