import Image from 'next/image'

const NavbarMobile = ({ handleToggleModal, userAuth }) => {
  return (
    <span
      onClick={handleToggleModal}
      className="flex cursor-pointer items-center justify-center gap-2 lg:hidden"
    >
      {userAuth && userAuth.user.email ? (
        <span className="flex size-8 select-none items-center justify-center rounded-full bg-primary text-lg font-bold uppercase text-black">
          {userAuth.user.email.slice(0, 1)}
        </span>
      ) : (
        <Image
          src={'/icons/user.svg'}
          alt="user"
          width={32}
          draggable={false}
          height={32}
          className="size-8 rounded-full bg-white"
        />
      )}
    </span>
  )
}

export default NavbarMobile
