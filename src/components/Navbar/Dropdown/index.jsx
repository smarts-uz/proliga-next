import Image from 'next/image'
import NavLink from './NavLink'
import { useLogOut } from '../../../app/hooks/auth/useLogOut/useLogOut'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Dropdown = () => {
  const dispatch = useDispatch()
  const { logOut } = useLogOut()
  const { userAuth } = useSelector((state) => state.auth)
  const { t } = useTranslation()
  const activeStyle = 'bg-neutral-800 border-primary text-neutral-50'
  const passiveStyle = 'bg-transparent text-neutral-300 border-transparent'
  const style = false ? activeStyle : passiveStyle

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.25, y: -20 }}
      className={`absolute right-0 top-12 flex w-56 flex-col gap-4 rounded-md bg-neutral-900 p-4 shadow-sm shadow-neutral-500`}
    >
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
          <button
            onClick={logOut}
            className="flex h-full w-full gap-2 rounded p-1 hover:bg-neutral-700"
          >
            <Image
              src={'/icons/logout.svg'}
              alt="user"
              width={24}
              height={24}
            />
            <p>{t('Tizimdan chiqish')}</p>
          </button>
        </>
      ) : (
        <>
          <NavLink href="/auth">
            <Image src={'/icons/login.svg'} alt="user" width={24} height={24} />
            <p>{t('Tizimga kirish_2')}</p>
          </NavLink>
        </>
      )}
    </motion.section>
  )
}

export default Dropdown
