import Image from 'next/image'
import { useTranslation } from 'react-i18next'
const PlayerNameFilter = ({ column, columnFilterValue }) => {
  const { t } = useTranslation()
  return (
    <div className="relative w-full sm:col-span-2">
      <input
        className="h-8 w-full rounded border border-neutral-500 bg-neutral-950  text-neutral-200 shadow placeholder:text-neutral-300 px-1 md:px-2"
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
