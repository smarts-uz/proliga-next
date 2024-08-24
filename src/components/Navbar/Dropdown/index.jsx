import Image from 'next/image'
import Link from 'next/link'
import { useLogOut } from '../../../app/hooks/auth/useLogOut/useLogOut'

const Dropdown = ({ state }) => {
  const { logOut } = useLogOut()

  return (
    <section
      className={`fade-in-fast absolute right-0 top-[4.75rem] flex-col gap-4 rounded-md bg-neutral-900 p-4 py-6`}
    >
      {!state.user ? (
        <Link href="/login" className="flex w-full justify-between gap-2">
          <Image src={'/icons/login.svg'} alt="user" width={24} height={24} />
          <p>Login</p>
        </Link>
      ) : (
        <button onClick={logOut} className="flex w-full justify-between gap-2">
          <Image src={'/icons/logout.svg'} alt="user" width={24} height={24} />
          <p>Log out</p>
        </button>
      )}
    </section>
  )
}

export default Dropdown
