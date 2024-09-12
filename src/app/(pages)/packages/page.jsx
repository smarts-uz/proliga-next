import Gutter from 'components/Gutter'

const Packages = () => {
  return (
    <Gutter>
      <section className="my-8 h-full space-y-6 rounded-xl bg-neutral-900 p-6 text-neutral-200">
        <h1 className="text-3xl font-bold">Paketlar</h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6">
          <div className="min-h-96 space-y-4 rounded-xl border p-4">
            <h2 className="text-lg font-medium md:text-xl">Balans paketlari</h2>
            <div className="flex flex-col gap-4">
              {balance.map((item, index) => (
                <div
                  key={index}
                  className="xs:text-md flex items-center justify-between rounded border p-2 text-sm"
                >
                  <span className="font-bold text-neutral-50">
                    {item.amount} gacha oshirish
                  </span>
                  <button className="rounded border border-neutral-800 bg-neutral-800 px-4 py-2 transition-all hover:border-primary">
                    Tanlang
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-96 space-y-4 rounded-xl border p-4">
            <h2 className="text-lg font-medium md:text-xl">
              Transfer paketlari
            </h2>
            <div className="flex flex-col gap-4">
              {transfers.map((item, index) => (
                <div
                  key={index}
                  className="xs:text-md flex items-center justify-between rounded border p-2 text-sm"
                >
                  <span className="font-bold text-neutral-50">
                    {item.amount} gacha oshirish
                  </span>
                  <button className="rounded border border-neutral-800 bg-neutral-800 px-4 py-2 transition-all hover:border-primary">
                    Tanlang
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-96 space-y-4 rounded-xl border p-4">
            <h2 className="text-lg font-medium md:text-xl">
              Bitta jamoadan oyinchisi paketlari
            </h2>
            <div className="flex flex-col gap-4">
              {maxClubMembers.map((item, index) => (
                <div
                  key={index}
                  className="xs:text-md flex items-center justify-between rounded border p-2 text-sm"
                >
                  <span className="font-bold text-neutral-50">
                    {item.amount} gacha oshirish
                  </span>
                  <button className="rounded border border-neutral-800 bg-neutral-800 px-4 py-2 transition-all hover:border-primary">
                    Tanlang
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Gutter>
  )
}
const balance = [
  {
    amount: 115,
    price: 25000,
  },
  {
    amount: 125,
    price: 35000,
  },
  {
    amount: 150,
    price: 65000,
  },
]

const transfers = [
  {
    amount: 3,
    price: 25000,
  },
  {
    amount: 4,
    price: 35000,
  },
  {
    amount: 5,
    price: 65000,
  },
]

const maxClubMembers = [
  {
    amount: 3,
    price: 25000,
  },
  {
    amount: 4,
    price: 35000,
  },
  {
    amount: 5,
    price: 65000,
  },
]

export default Packages
