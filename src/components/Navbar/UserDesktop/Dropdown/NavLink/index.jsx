'use client'
import Link from 'next/link'

const NavLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="flex h-full w-full gap-2 rounded p-1 hover:bg-neutral-800"
    >
      {children}
    </Link>
  )
}
export default NavLink
