'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Gutter from '../Gutter'
import PlayLinks from './Links'
import MobileSidebar from './UserMobile/Sidebar'
import NavbarUserDesktop from './UserDesktop'
import NavbarUserMobile from './UserMobile'
import ChangeLanguageDropdown from './Language'
import Notification from './Notification'

const Navbar = () => {
  const path = usePathname()
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-20 w-screen bg-black bg-opacity-80 py-4 backdrop-blur-md">
        <Gutter>
          <div className="flex w-full items-center justify-between text-white">
            <Link
              href={
                path.split('/').includes('championships')
                  ? '/'
                  : '/championships'
              }
            >
              <Image
                src="/icons/proliga-full.svg"
                priority={true}
                alt="Proliga"
                width={180}
                height={56}
                draggable={false}
                className="w-28 cursor-pointer sm:w-36"
              />
            </Link>
            <PlayLinks />
            <div className="flex w-max items-center justify-center gap-4">
              <ChangeLanguageDropdown />
              <Notification />
              <NavbarUserMobile handleToggleModal={() => setModalOpen(true)} />
              <NavbarUserDesktop />
            </div>
          </div>
        </Gutter>
      </nav>
      <MobileSidebar isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </>
  )
}

export default Navbar
