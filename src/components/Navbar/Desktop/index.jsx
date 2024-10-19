import Image from 'next/image'
import Dropdown from './Dropdown'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { useState } from 'react'

const NavbarDesktop = ({ userAuth }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  return (
    <Popover open={isDropdownOpen} onOpenChange={setDropdownOpen}>
      <PopoverTrigger
        className="hidden cursor-pointer items-center justify-center gap-2 lg:flex"
        asChild
      >
        <div>
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
              key={userAuth?.user.email}
              className="size-8 rounded-full bg-white"
            />
          )}
          <Image
            src={'/icons/arrow-down.svg'}
            className={`hidden size-5 select-none transition-all sm:block lg:hidden xl:block`}
            alt="arrow down"
            width={20}
            draggable={false}
            height={20}
          />
        </div>
      </PopoverTrigger>
      <Dropdown />
    </Popover>
  )
}

export default NavbarDesktop
