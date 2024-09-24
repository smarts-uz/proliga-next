import { useTranslation } from 'react-i18next'
import Image from 'next/image'

const RankingPlayers = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full rounded-lg bg-black p-6 text-neutral-100">
      <h3 className="text-xl font-bold">
        {t('Eng kuchli top 3 - futbolchilar')}
      </h3>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="size-20 rounded-lg bg-white 2xl:size-28"></div>
        <div className="size-20 rounded-lg bg-white 2xl:size-28"></div>
        <div className="size-20 rounded-lg bg-white 2xl:size-28"></div>
      </div>
    </div>
  )
}

const TeamPlace = ({ team, index }) => {
  return (
    <div className="relative min-h-32 rounded-lg bg-white p-2">
      <div className="flex items-center justify-between">
        <Image
          src={`/icons/${index + 1}-place.svg`}
          alt="top team place"
          width={24}
          height={24}
          className="size-6 md:size-8"
        />
        <span className="flex h-6 w-12 items-center justify-center rounded-full bg-primary text-xs font-medium text-black sm:text-base">
          {team?.point ?? '00'}
        </span>
      </div>
      <h4 className="line-clamp-2 max-w-28 break-words text-sm font-bold text-black">
        {team?.name ?? 'team'}
      </h4>
      <p className="line-clamp-2 max-w-28 break-words text-sm font-medium text-black">
        {team.user_id.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, '$1***@$2')}
      </p>
      <span className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-br-lg rounded-tl-lg bg-primary font-extrabold text-black">
        {index + 1}
      </span>
    </div>
  )
}


export default RankingPlayers
