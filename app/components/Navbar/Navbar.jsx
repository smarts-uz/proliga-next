'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './components/Dropdown'

const Navbar = () => {
  const [isDropdownOpen, toggleDropdown] = useState(false)

  const handleToggleDropdown = () => {
    toggleDropdown(!isDropdownOpen)
  }

  return (
    <nav className="relative flex w-full items-center justify-between bg-black bg-opacity-90 px-12 py-5 text-white shadow-sm shadow-gray-200">
      <Link href="/">
        <Image
          src="/icons/proliga.svg"
          alt="Proliga"
          width={180}
          height={60}
          className="cursor-pointer"
        />
      </Link>
      <section className="flex items-center text-white gap-6">
        <Link href={'/'}>Chempionat</Link>
        <Link href={'/'}>Yutuqlar</Link>
        <Link href={'/'}>Qoida</Link>
      </section>
      <div className="flex w-max items-center justify-center gap-4">
        <button className="h-1/2 w-1/2">
          <Image src={'/icons/bell.svg'} alt="bell" width={24} height={24} />
        </button>
        <div
          onClick={handleToggleDropdown}
          className="flex min-w-16 cursor-pointer items-center justify-center gap-2"
        >
          <span className="size-8 rounded-full bg-white" />
          <Image
            src={'/icons/arrow-down.svg'}
            className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-all`}
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
    </nav>
  )
}

export default Navbar
