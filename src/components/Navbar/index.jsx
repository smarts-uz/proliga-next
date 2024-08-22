'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Gutter from '@/src/components/Gutter'

const Navbar = () => {
  const [isDropdownOpen, toggleDropdown] = useState(false)

  const handleToggleDropdown = () => {
    toggleDropdown(!isDropdownOpen)
  }

  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-sm shadow shadow-neutral-500 z-20 fixed left-0 right-0 top-0">
      <Gutter>
        <div className="relative flex w-full items-center justify-between py-4 text-white">
          <Link href="/">
            <Image
              src="/images/proliga.png"
              alt="Proliga"
              width={180}
              height={56}
              priority={true}
              className="h-8 w-40 cursor-pointer"
            />
          </Link>
          <section className="hidden items-center gap-6 text-neutral-300 xl:flex">
            <Link
              className="transition-all hover:text-white hover:underline"
              href={'/'}
            >
              Chempionat
            </Link>
            <Link
              className="transition-all hover:text-white hover:underline"
              href={'/'}
            >
              Yutuqlar
            </Link>
            <Link
              className="transition-all hover:text-white hover:underline"
              href={'/'}
            >
              Qoida
            </Link>
          </section>
          <div className="flex w-max items-center justify-center gap-4">
            <button>
              <Image
                src={'/icons/bell.svg'}
                alt="bell"
                width={24}
                height={24}
                className="size-6 select-none"
              />
            </button>
            <span
              onClick={handleToggleDropdown}
              className="flex items-center justify-center gap-2 sm:min-w-24"
            >
              <Image
                src={'/icons/user.svg'}
                alt="user"
                width={32}
                height={32}
                className="size-8 rounded-full bg-white"
              />
              <Image
                src={'/icons/arrow-down.svg'}
                className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} size-5 hidden select-none transition-all sm:block`}
                alt="arrow down"
                width={20}
                height={20}
              />
              {isDropdownOpen && (
                <Dropdown
                  isDropdownOpen={isDropdownOpen}
                  toggleDropdown={toggleDropdown}
                />
              )}
            </span>
          </div>
        </div>
      </Gutter>
    </nav>
  )
}

export default Navbar
