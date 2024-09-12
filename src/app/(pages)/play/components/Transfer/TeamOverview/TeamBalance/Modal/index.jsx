import Backdrop from 'components/Backdrop'
import Image from 'next/image'
import Link from 'next/link'

const TeamBalanceModal = ({ handleModal }) => {
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
            Balans miqdorini oshirishni hoxlaysizmi?
          </h3>
        </header>
        <section className="flex flex-col gap-2">
          {balance.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 rounded border border-neutral-400 p-4"
            >
              <Link href={`/confirm-payment/${item.id}`}>
                Tangalar miqdorini
                <span className="font-bold">{item.amount}</span> tangaga
                oshirish
              </Link>
            </div>
          ))}
        </section>
      </dialog>
    </Backdrop>
  )
}

const balance = [
  {
    id: 1,
    type: 'balance',
    amount: 115,
    price: 25000,
  },
  {
    id: 2,
    type: 'balance',

    amount: 125,
    price: 35000,
  },
  {
    id: 3,
    type: 'balance',
    amount: 150,
    price: 65000,
  },
]

export default TeamBalanceModal
