import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const RankingTeams = () => {
  const { t } = useTranslation()
  const { topTeams } = useSelector((store) => store.teams)

  return (
    <div className="w-full rounded-lg bg-black p-6 text-neutral-100">
      <h3 className="text-xl font-bold">{t('Eng kuchli top 3 jamoalar')}</h3>
      <div className="mt-4 grid min-h-32 grid-cols-2 gap-2 xs:grid-cols-3">
        {topTeams?.map((team, index) => (
          <TeamPlace team={team} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

const TeamPlace = ({ team, index }) => {
  return (
    <div className="fade-in-fast relative min-h-32 rounded-lg bg-neutral-100 p-2">
      <div className="flex items-center justify-between">
        <Image
          src={`/icons/${index + 1}-place.svg`}
          alt="top team place"
          width={24}
          height={24}
          className="size-6 md:size-8"
        />
        <span className="flex h-6 w-12 items-center justify-center rounded-full bg-primary text-xs font-bold text-black sm:text-sm">
          {team?.point ?? '00'}
        </span>
      </div>
      <h4 className="line-clamp-2 max-w-28 break-words text-sm font-bold text-black">
        {team?.name ?? 'team'}
      </h4>
      <p className="line-clamp-2 max-w-28 break-words text-sm font-medium text-black">
        {team.user_id.name}
      </p>
      <span className="absolute bottom-0 right-0 flex size-6 items-center justify-center rounded-br-lg rounded-tl-lg bg-primary text-sm font-extrabold text-black">
        {index + 1}
      </span>
    </div>
  )
}

export default RankingTeams
