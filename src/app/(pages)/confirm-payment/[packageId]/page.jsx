'use client'

import Gutter from 'components/Gutter'

const ConfirmPayment = ({ params }) => {
  console.log(params.packageId)
  const allPackages = [...balance, ...transfers, ...maxClubMembers]
  const currentPackage = allPackages.find(
    (item) => item.id === +params.packageId
  )

  const getPackageText = (currentPackage) => {
    if (currentPackage.type === 'balance') return 'Balansni'
    if (currentPackage.type === 'transfer') return 'Transferni'
    if (currentPackage.type === 'maxClubMembers')
      return "Maksimum klub oyi'nchilarini"
  }

  return (
    <Gutter>
      <section className="my-8 w-full">
        <div className="flex items-center gap-6 rounded-md bg-neutral-800 p-6">
          <span className="flex size-12 items-center justify-center rounded-full bg-black font-bold text-neutral-300">
            1
          </span>
          <div className="flex w-full items-center justify-between">
            <div className="space-x-2 text-xl">
              {getPackageText(currentPackage)}
              <span className="text-2xl font-bold">
                {' ' + currentPackage.amount}
              </span>{' '}
              ga oshirish
            </div>
            <div className="text-2xl font-medium text-neutral-100">
              <span className="text-3xl font-bold">
                {currentPackage.price + ' '}
              </span>
              so&apos;m
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex w-full items-center gap-6 p-6">
            <span className="flex size-12 items-center justify-center rounded-full bg-neutral-700 font-bold text-neutral-300">
              2
            </span>
            <h3 className="text-xl font-medium">
              Qanday qilib tolov qilmoqchisiz?
            </h3>
          </div>
          <section className="flex gap-4 md:gap-6">
            <div className="size-80 rounded-xl border border-neutral-600">
              {/* <Image  /> */}
            </div>
            <div className="size-80 rounded-xl border border-neutral-600"></div>
            <div className="size-80 rounded-xl border border-neutral-600"></div>
          </section>
        </div>
      </section>
    </Gutter>
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

const maxClubMembers = [
  {
    id: 7,
    type: 'maxClubMembers',
    amount: 3,
    price: 25000,
  },
  {
    id: 8,
    type: 'maxClubMembers',
    amount: 4,
    price: 35000,
  },
  {
    id: 9,
    type: 'maxClubMembers',
    amount: 5,
    price: 65000,
  },
]

export default ConfirmPayment
