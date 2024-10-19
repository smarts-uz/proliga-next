import Image from 'next/image'
import NavLink from './NavLink'
import { useLogOut } from 'app/hooks/auth/useLogOut/useLogOut'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { PopoverContent } from '@/components/ui/popover'

const Dropdown = () => {
  const { logOut } = useLogOut()
  const { userAuth } = useSelector((state) => state.auth)
  const { t } = useTranslation()

  return (
    <PopoverContent className="mr-2 mt-4 flex w-64 flex-col gap-2">
      <NavLink href="/championships">
        <Image src="/icons/cup.svg" alt="user" width={24} height={24} />
        <p> {t('Chempionat')}</p>
      </NavLink>
      {userAuth ? (
        <>
          <NavLink href="/cabinet">
            <Image
              width={24}
              height={24}
              alt="settings"
              src="/icons/gear.svg"
            />
            <p>{t('Sozlamalar')}</p>
          </NavLink>
          <div
            onClick={logOut}
            className="flex h-full w-full cursor-pointer gap-2 rounded p-1 hover:bg-neutral-900"
          >
            <Image
              src={'/icons/logout.svg'}
              alt="user"
              width={24}
              height={24}
            />
            <p>{t('Tizimdan chiqish')}</p>
          </div>
        </>
      ) : (
        <NavLink href="/auth">
          <Image src={'/icons/login.svg'} alt="user" width={24} height={24} />
          <p>{t('Tizimga kirish_2')}</p>
        </NavLink>
      )}
    </PopoverContent>
  )
}

export default Dropdown
