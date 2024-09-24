import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const RankingPlayers = () => {
  const { t } = useTranslation()
  const { topPlayers } = useSelector((store) => store.players)

  return (
    <div className="w-full rounded-lg bg-black p-6 text-neutral-100">
      <h3 className="text-xl font-bold">
        {t('Eng kuchli top 3 - futbolchilar')}
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-2 xs:grid-cols-3">
        {topPlayers?.map((player, index) => (
          <PlayerPlace key={index} player={player} index={index} />
        ))}
      </div>
    </div>
  )
}

const PlayerPlace = ({ player, index }) => {
  const imageErr = (e) => {
    e.target.src = `/club/${player?.club_id?.slug}/app.svg`
  }

  return (
    <div className="relative min-h-32 rounded-lg bg-neutral-100 p-2">
      <div className="flex items-center justify-between">
        <Image
          src={player?.image}
          alt="top team place"
          width={24}
          height={24}
          onError={imageErr}
          className="size-6 rounded-full md:size-8"
        />
        <span className="flex h-6 w-12 items-center justify-center rounded-full bg-primary text-xs font-bold text-black sm:text-sm">
          {player?.point ?? '00'}
        </span>
      </div>
      <h4 className="line-clamp-2 max-w-28 break-words text-sm font-bold text-black">
        {player?.club?.name ?? 'team'}
      </h4>
      <p className="line-clamp-2 max-w-28 break-words text-sm font-medium text-black">
        {player.name}
      </p>
      <span className="absolute bottom-0 right-0 flex size-6 items-center justify-center rounded-br-lg rounded-tl-lg bg-primary text-sm font-extrabold text-black">
        {index + 1}
      </span>
    </div>
  )
}

export default RankingPlayers
