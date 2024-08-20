import Image from 'next/image'
import Link from 'next/link'

const Dropdown = ({ isDropdownOpen, toggleDropdown }) => {
  const styles = isDropdownOpen ? `flex` : `hidden`

  return (
    <section
      className={`${styles} absolute right-12 top-20 flex-col gap-4 rounded-md bg-gray-900 p-4 py-6`}
    >
      <Link href={'/login'} className="flex w-full justify-between gap-2">
        <Image
          className="bg-black"
          src={'/icons/login.svg'}
          alt="user"
          width={24}
          height={24}
        />
        <p>Login</p>
      </Link>
    </section>
  )
}

export default Dropdown
