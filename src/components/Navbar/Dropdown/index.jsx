import Image from 'next/image'
import Link from 'next/link'
import { useLogOut } from '../../../app/hooks/auth/useLogOut/useLogOut'

const Dropdown = ({ auth }) => {
  const { logOut } = useLogOut()

  console.log(auth)
  return (
    <section
      className={`fade-in-fast absolute right-0 top-[4.75rem] flex w-40 flex-col gap-4 rounded-md bg-neutral-900 p-4 py-6`}
    >
      <Link
        href="/championships"
        className="flex w-full gap-2 rounded py-1 hover:bg-neutral-700 md:hidden"
      >
        <Image src={'/icons/login.svg'} alt="user" width={24} height={24} />
        <p>Chempionat</p>
      </Link>
      {!auth?.email ? (
        <Link
          href="/login"
          className="flex w-full gap-2 rounded py-1 hover:bg-neutral-700"
        >
          <Image src={'/icons/login.svg'} alt="user" width={24} height={24} />
          <p>Login</p>
        </Link>
      ) : (
        <button
          onClick={logOut}
          className="flex w-full gap-2 rounded hover:bg-neutral-700"
        >
          <Image src={'/icons/logout.svg'} alt="user" width={24} height={24} />
          <p>Log out</p>
        </button>
      )}
    </section>
  )
}

export default Dropdown
