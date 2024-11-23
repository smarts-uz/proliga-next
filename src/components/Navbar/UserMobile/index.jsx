/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const NavbarUserMobile = ({ handleToggleModal }) => {
  const { userAuth, userTable } = useSelector((state) => state.auth)

  return (
    <span
      onClick={handleToggleModal}
      className="flex cursor-pointer items-center justify-center gap-2 lg:hidden"
    >
      {userTable?.email && !userTable?.photo && (
        <span className="flex size-8 select-none items-center justify-center rounded-full bg-primary text-lg font-bold uppercase text-black">
          {userAuth.user.email.slice(0, 1)}
        </span>
      )}
      {userTable?.email && userTable?.photo && (
        <img
          src={process.env.NEXT_PUBLIC_URL + '/avatar/' + userTable?.photo}
          alt="user"
          width={32}
          draggable={false}
          height={32}
          key={userAuth?.user.email}
          className="size-8 rounded-full bg-white"
        />
      )}
      {!userTable?.email && !userTable?.photo && (
        <Image
          src={'/icons/user.svg'}
          alt="user"
          width={32}
          draggable={false}
          height={32}
          key={userAuth?.user.email}
          className="size-8 rounded-full bg-white"
        />
      )}
    </span>
  )
}

export default NavbarUserMobile
