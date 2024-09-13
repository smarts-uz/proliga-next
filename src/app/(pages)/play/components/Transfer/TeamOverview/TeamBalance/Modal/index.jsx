import Backdrop from 'components/Backdrop'
import Image from 'next/image'
import Link from 'next/link'

const TeamBalanceModal = ({ handleModal }) => {
  return (
    <Backdrop onClick={handleModal}>
      <dialog
        className="mx-4 flex flex-col gap-4 overflow-y-auto rounded-2xl bg-neutral-900 p-4 text-neutral-200 fade-in xs:mx-auto xs:w-2/3 md:w-1/2 md:p-6 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleModal} className="self-end">
          <Image width={24} height={24} src="/icons/close.svg" alt="close" />
        </button>
        <header className="space-y-1">
          <h3 className="text-xl font-semibold">
            Balans miqdorini oshirishni hoxlaysizmi?
          </h3>
          <p className="text-sm text-neutral-300 md:text-base">
            Musobaqada g‘alaba qozonish uchun balansdagi 100 tanga etarli
            bo‘lmasligi mumkin. Tangalarni ko‘paytirish uchun foydalanuvchiga
            qo‘shimcha 50 tangagacha sotib olish imkoniyatiga ega bo‘ladi. Shu
            sababli, foydalanuvchilar balansni oshirib, chempionlik sari qadam
            tashlaydi
          </p>
        </header>
        <section className="flex flex-col gap-2 text-sm xs:text-base">
          {balance.map((item) => (
            <Link key={item.id} href={`/confirm-payment/${item.id}`}>
              <div className="flex gap-2 rounded border border-neutral-400 p-4 transition-all hover:border-primary">
                Tangalar miqdorini
                <span className="font-bold">{item.amount}</span> tangaga
                oshirish
              </div>
            </Link>
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
