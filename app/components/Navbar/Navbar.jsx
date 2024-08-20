import Image from 'next/image'
import Link from 'next/link'
import ArrowDown from '../Icons/ArrowDown/ArrowDown'
import Bell from '../Icons/Bell/Bell'

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-black bg-opacity-90 px-12 py-5 border-b border-white">
      <Link href="/">
        <Image
          src="/images/Proliga.svg"
          alt="Proliga"
          width={180}
          height={60}
          className="cursor-pointer"
        />
      </Link>
      <section className="flex items-center gap-6">
        <Link href={'/'}>Chempionat</Link>
        <Link href={'/'}>Yutuqlar</Link>
        <Link href={'/'}>Qoida</Link>
      </section>
      <div className="flex w-max items-center justify-center gap-1">
        <button className='w-1/2 h-1/2'>
          <Bell />
        </button>
        <div className="flex min-w-24 items-center justify-center cursor-pointer">
          <span className="ml-3 size-8 shrink-0  rounded-full bg-white" />
          <ArrowDown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
