import { useSelector } from 'react-redux'
import { selectClubs } from 'app/lib/features/clubs/clubs.selector'
import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ClubsFilter = ({ column }) => {
  const selectedClubs = useSelector(selectClubs)
  const { t } = useTranslation()

  return (
    <Select onValueChange={(value) => column.setFilterValue(value)}>
      <SelectTrigger className="h-8 w-full min-w-40 truncate rounded border border-neutral-500 bg-neutral-950 px-2 text-neutral-200 shadow sm:max-w-36 md:max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          className="rounded-sm checked:bg-neutral-800"
          defaultChecked={true}
        >
          {t('Hamma_Clublar')}
        </SelectItem>
        {selectedClubs?.map((club) => (
          <SelectItem
            key={club.id}
            value={club.name}
            className="capitalize text-neutral-200 checked:bg-neutral-800"
          >
            {club.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default ClubsFilter
