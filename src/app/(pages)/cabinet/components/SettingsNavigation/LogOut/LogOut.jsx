import { useLogOut } from 'app/hooks/auth/useLogOut/useLogOut'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const SettingsSidebarLogOut = () => {
  const { logOut } = useLogOut()
  const { t } = useTranslation()

  return (
    <button
      onClick={logOut}
      className="mt-auto flex h-min w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-red-600 bg-opacity-25 px-2 py-2 text-neutral-200 transition-all hover:bg-opacity-35 sm:justify-start lg:w-auto lg:px-8 xl:gap-4"
    >
      <Image src={'/icons/logout.svg'} alt="user" width={24} height={24} />
      <p className="hidden text-xs sm:block md:text-sm xl:text-lg">
        {t('Tizimdan chiqish')}
      </p>
    </button>
  )
}

export default SettingsSidebarLogOut