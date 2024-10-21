import Image from 'next/image'
import TeamMaxClubMembersModal from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setClubModal } from 'app/lib/features/teamPlayers/teamPlayers.slice'

export default function TeamMaxClubMembers() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { clubModal } = useSelector((state) => state.teamPlayers)

  return (
    <>
      <div
        className="group w-1/2 cursor-pointer capitalize md:w-auto"
        onClick={() => dispatch(setClubModal(!clubModal))}
      >
        <header className="flex text-neutral-400 transition-all group-hover:text-neutral-50 group-hover:underline">
          <h3
            title="Maksimum sotib olish mumkin bolgan o'yinchilar"
            className="text-xs sm:text-xs lg:text-xs 2xl:text-sm"
          >
            {t('Bir jamoadan')}
          </h3>
          <Image
            src="/icons/arrow-bold-up.svg"
            alt="arrow"
            width={16}
            className="filter-neutral-400 group-hover:filter-neutral-50 size-3.5 translate-x-0 rotate-45 self-center transition-all group-hover:translate-x-1 xs:size-4"
            height={16}
          />
        </header>
        <p className="text-2xl font-bold sm:text-3xl">
          {currentTeam?.count_of_transfers ?? '0'}
        </p>
      </div>
      <TeamMaxClubMembersModal />
    </>
  )
}
