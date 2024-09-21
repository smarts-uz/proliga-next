import { useSelector } from 'react-redux'
import { selectClubs } from 'app/lib/features/clubs/clubs.selector'
import { useTranslation } from 'react-i18next'

const ClubsFilter = ({ column }) => {
  const selectedClubs = useSelector(selectClubs)
  const { t } = useTranslation()
  return (
    <select
      className="sm:col-span-1 h-8 w-full truncate rounded border border-neutral-500 bg-neutral-950 px-0.5 md:px-1 text-neutral-200 shadow sm:max-w-36 md:max-w-48"
      onChange={(e) => column.setFilterValue(e.target.value)}
    >
      <option
        value=""
        className="rounded-sm checked:bg-neutral-800"
        defaultChecked
      >
        {t("Hamma_Clublar")}
      </option>
      {selectedClubs?.map((club) => (
        <option
          key={club.id}
          value={club.name}
          className="capitalize text-neutral-200 checked:bg-neutral-800"
        >
          {club.name}
        </option>
      ))}
    </select>
  )
}

export default ClubsFilter
