import Backdrop from 'components/Backdrop'
import Image from 'next/image'
import Link from 'next/link'

const TeamMaxTransfersModal = ({ handleModal }) => {
  return (
    <Backdrop onClick={handleModal}>
      <dialog
        className="flex min-w-96 flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-4 text-neutral-200 fade-in md:p-6 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleModal} className="self-end">
          <Image width={24} height={24} src="/icons/close.svg" alt="close" />
        </button>
        <header>
          <h3 className="text-xl font-semibold">
            Transfer limitini oshirishni hoxlaysizmi?
          </h3>
        </header>
        <section className="flex flex-col gap-2">
          {transfers.map((transfer) => (
            <div
              key={transfer.id}
              className="flex gap-2 rounded border border-neutral-400 p-4"
            >
              <Link href={`/confirm-payment/${transfer.id}`}>
                Transfer limitni
                <span className="font-bold">{transfer.amount}ta</span> oshirish
              </Link>
            </div>
          ))}
        </section>
      </dialog>
    </Backdrop>
  )
}

const transfers = [
  {
    id: 4,
    type: 'transfer',
    amount: 3,
    price: 25000,
  },
  {
    id: 5,
    type: 'transfer',
    amount: 4,
    price: 35000,
  },
  {
    id: 6,
    type: 'transfer',
    amount: 5,
    price: 65000,
  },
]

export default TeamMaxTransfersModal
