import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import { LANGUAGE } from 'app/utils/languages.util'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { setLanguage } from 'app/lib/features/systemLanguage/systemLanguage.slice'

const CabinetLanguageTab = () => {
  const dispatch = useDispatch()
  const { lang } = useSelector((store) => store.systemLanguage)
  const { t } = useTranslation()

  return (
    <motion.section
      initial={{ opacity: 0.25 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-1 flex-col gap-4 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
    >
      <h3>{t('Tilni almashtirish')}</h3>
      <Select
        onValueChange={(value) => dispatch(setLanguage(value))}
        defaultValue={lang ?? LANGUAGE.uz}
      >
        <SelectTrigger className="w-auto sm:w-80">
          <SelectValue placeholder={t('Til')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={LANGUAGE.uz}>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/icons/uzbekistan.svg"
                alt="uzbekistan"
                width={24}
                height={24}
                className="size-6"
              />
              <p>Uzbekistan</p>
            </div>
          </SelectItem>
          <SelectItem value={LANGUAGE.ru}>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/icons/russia.svg"
                alt="uzbekistan"
                width={24}
                height={24}
              />
              <p>Russia</p>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <button
        className="w-full rounded border border-black bg-primary bg-opacity-75 py-2 text-sm font-semibold capitalize text-neutral-900 transition-all hover:bg-opacity-100 sm:max-w-40"
        type="submit"
      >
        {t('almashtirish')}
      </button>
    </motion.section>
  )
}

export default CabinetLanguageTab
