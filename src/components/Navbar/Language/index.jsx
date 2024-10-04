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
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateUserLanguage } from 'app/hooks/user/useUpdateUserLanguage/useUpdateUserLanguage'
import { setLanguage } from 'app/lib/features/systemLanguage/systemLanguage.slice'

const ChangeLanguageDropdown = () => {
  const dispatch = useDispatch()
  const { lang } = useSelector((store) => store.systemLanguage)
  const { userTable } = useSelector((store) => store.auth)
  const { t, i18n } = useTranslation()
  const { updateUserLanguage, error, isLoading } = useUpdateUserLanguage()

  const handleChange = async (lang) => {
    if (userTable?.id) {
      return await updateUserLanguage({ lang })
    } else {
      dispatch(setLanguage(lang))
      i18n.changeLanguage(lang)
    }
  }

  return (
    <Select
      onValueChange={(value) => handleChange(value)}
      defaultValue={userTable?.language ?? lang}
    >
      <SelectTrigger className="w-auto px-1 md:w-20 xl:w-24 xl:px-2">
        <SelectValue placeholder={t('Til')} />
      </SelectTrigger>
      <SelectContent className="w-min">
        <SelectItem value={LANGUAGE.uz}>
          <div className="flex items-center justify-center md:gap-1 xl:gap-2">
            <Image
              src="/icons/uzbekistan.svg"
              alt="uzbekistan"
              width={24}
              height={24}
              className="size-6"
            />
            <p className="hidden md:block">UZ</p>
          </div>
        </SelectItem>
        <SelectItem value={LANGUAGE.ru}>
          <div className="flex items-center justify-center md:gap-1 xl:gap-2">
            <Image
              src="/icons/russia.svg"
              alt="uzbekistan"
              width={24}
              className="size-6"
              height={24}
            />
            <p className="hidden md:block">РУ</p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default ChangeLanguageDropdown
