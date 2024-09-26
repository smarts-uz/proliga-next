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

const CabinetLanguageTab = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex w-full flex-1 flex-col gap-4 rounded-xl bg-neutral-900 p-4 lg:h-auto xl:p-6"
    >
      <h3>Language</h3>
      <Select>
        <SelectTrigger className="w-auto sm:w-80">
          <SelectValue placeholder="Language" />
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
    </motion.section>
  )
}

export default CabinetLanguageTab
