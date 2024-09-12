import Backdrop from 'components/Backdrop'
import Link from 'next/link'
import Image from 'next/image'

const TeamMaxClubMembersModal = ({ handleModal }) => {
  return (
    <Backdrop bgOpacity={'bg-opacity-50'} onClick={handleModal}>
      <dialog
        className="flex min-w-96 flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-4 text-neutral-200 fade-in md:p-6 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleModal} className="self-end">
          <Image width={24} height={24} src="/icons/close.svg" alt="close" />
        </button>
        <header>
          <h3 className="text-xl font-semibold">
            Bir jamoadan oyinchilarni sonini oshirishni hoxlaysizmi?
          </h3>
        </header>
        <section className="flex flex-col gap-2">
          <div className="flex gap-2 rounded border border-neutral-400 p-4">
            <Link href="/">
              Bir jamoadan <span className="font-bold">3ta</span> futbolchi
              sotib olish
            </Link>
          </div>
          <div className="flex gap-2 rounded border border-neutral-400 p-4">
            <Link href="/">
              Bir jamoadan <span className="font-bold">4ta</span> futbolchi
              sotib olish
            </Link>
          </div>
          <div className="flex gap-2 rounded border border-neutral-400 p-4">
            <Link href="/">
              Bir jamoadan <span className="font-bold">5ta</span> futbolchi
              sotib olish
            </Link>
          </div>
        </section>
      </dialog>
    </Backdrop>
  )
}

export default TeamMaxClubMembersModal
