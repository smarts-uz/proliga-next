import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/input'

const PlayerNameFilter = ({ column, columnFilterValue }) => {
  const { t } = useTranslation()
  return (
    <div className="relative col-span-4 w-full sm:col-span-2 sm:max-w-96 lg:col-span-4 lg:max-w-full xl:col-span-2 xl:max-w-96">
      <Input
        className="h-8 w-full rounded border border-neutral-500 bg-neutral-950 pl-2 pr-7 text-neutral-200 shadow placeholder:text-neutral-300"
        onChange={(e) => column.setFilterValue(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        placeholder={t("O'yinchi Ismi")}
        type="text"
        value={columnFilterValue ?? ''}
      />
      <Image
        src="/icons/search.svg"
        className="absolute right-2 top-2"
        alt="search"
        width={16}
        height={16}
      />
    </div>
  )
}
export default PlayerNameFilter
