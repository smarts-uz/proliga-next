/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const PlayerPhoto = ({ currentPlayer, position }) => {
  return (
    <div className="flex gap-2 md:gap-4">
      <img
        src={
          currentPlayer?.image
            ? currentPlayer?.image
            : `/club/${currentPlayer?.club_id?.slug}/app.svg`
        }
        alt="player image"
        width={24}
        height={24}
        onError={(e) => (e.target.src = '/images/placeholder-user.png')}
        className="h-full w-full max-w-14 rounded-md md:max-w-20 xl:max-w-36"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold md:text-2xl">{currentPlayer.name}</h3>
        <div className="flex items-center gap-2 text-neutral-100">
          <img
            src={`/club-jpg/${currentPlayer?.club?.slug}/logo.jpeg`}
            alt="home club"
            width={48}
            height={48}
            draggable={false}
            onError={(e) => (e.target.src = '/icons/football.svg')}
            className="h-full w-6 select-none rounded-full bg-neutral-400 md:w-8"
          />
          <p className="text-neutral-300">{currentPlayer?.club?.name}</p>
          <span>|</span>
          <p className="text-sm md:text-base">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayerPhoto
