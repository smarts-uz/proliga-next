'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useLogOut } from 'app/hooks/auth/useLogOut/useLogOut'

const SettingsSidebarLogOut = () => {
  const { logOut } = useLogOut()
  const { t } = useTranslation()

  return (
    <button
      onClick={logOut}
      className="mt-auto flex h-min w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-red-600 bg-opacity-25 p-2 text-neutral-200 transition-all hover:bg-opacity-35 lg:w-auto lg:justify-start lg:px-8"
    >
      <Image src={'/icons/logout.svg'} alt="user" width={24} height={24} />
      <p className="hidden text-nowrap lg:block lg:text-sm">
        {t('Tizimdan chiqish')}
      </p>
    </button>
  )
}

export default SettingsSidebarLogOut
