import Image from 'next/image'
import NavLink from './NavLink'
import { useLogOut } from '../../../app/hooks/auth/useLogOut/useLogOut'
import { useSelector } from 'react-redux'

const Dropdown = () => {
  const { logOut } = useLogOut()
  const { userAuth } = useSelector((state) => state.auth)

  return (
    <section
      className={`fade-in-fast absolute right-0 top-[4.25rem] flex w-56 flex-col gap-4 rounded-md bg-neutral-900 p-4 shadow-sm shadow-neutral-500`}
    >
      <NavLink href="/championships">
        <Image src="/icons/cup.svg" alt="user" width={24} height={24} />
        <p>Chempionat</p>
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
            <p>Sozlamalar</p>
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
            <p>Tizimdan chiqish</p>
          </button>
        </>
      ) : (
        <>
          <NavLink href="/auth">
            <Image src={'/icons/login.svg'} alt="user" width={24} height={24} />
            <p>Tizimga Kirish</p>
          </NavLink>
        </>
      )}
    </section>
  )
}

export default Dropdown
