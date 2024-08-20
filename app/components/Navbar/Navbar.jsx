'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './components/Dropdown'
import Gutter from '../Gutter/Gutter'

const Navbar = () => {
  const [isDropdownOpen, toggleDropdown] = useState(false)

  const handleToggleDropdown = () => {
    toggleDropdown(!isDropdownOpen)
  }

  return (
    <nav className="bg-black bg-opacity-90 shadow shadow-white">
      <Gutter>
        <div className="relative flex w-full items-center justify-between py-5 text-white">
          <Link href="/">
            <Image
              src="/images/proliga.png"
              alt="Proliga"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </Link>
          <section className="xl:flex items-center gap-6 text-white hidden">
            <Link href={'/'}>Chempionat</Link>
            <Link href={'/'}>Yutuqlar</Link>
            <Link href={'/'}>Qoida</Link>
          </section>
          <div className="flex w-max items-center justify-center gap-4">
            <button className="h-1/2 w-1/2">
              <Image
                src={'/icons/bell.svg'}
                alt="bell"
                width={24}
                height={24}
              />
            </button>
            <div
              onClick={handleToggleDropdown}
              className="flex sm:min-w-24 cursor-pointer items-center justify-center gap-2"
            >
              <button className="flex size-10 items-center justify-center p-1">
                <Image
                  src={'/icons/user.svg'}
                  alt="user"
                  width={32}
                  height={32}
                  className="rounded-full bg-white"
                />
              </button>
              <Image
                src={'/icons/arrow-down.svg'}
                className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-all sm:block hidden`}
                alt="arrow down"
                width={24}
                height={24}
              />
              <Dropdown
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
              />
            </div>
          </div>
        </div>
      </Gutter>
    </nav>
  )
}

export default Navbar
