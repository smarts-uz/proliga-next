'use client'

import Gutter from 'components/Gutter'
import CurrentPackage from './components/CurrentPackage'
import PaymentOptions from './components/PaymentOptions'

const ConfirmPayment = ({ params }) => {
  const allPackages = [...balance, ...transfers, ...maxClubMembers]
  const currentPackage = allPackages.find(
    (item) => item.id === +params.packageId
  )

  return (
    <Gutter>
      <section className="my-8 w-full">
        <CurrentPackage currentPackage={currentPackage} />
        <PaymentOptions />
        <div className="mt-16 flex h-24 items-center justify-between gap-6 rounded-md bg-gradient-to-l from-neutral-800 to-stone-900 p-6 md:mt-24">
          <div>
            <h2 className="text-xl font-medium">
              Ummiy To&apos;lov Miqdori:{' '}
              <span className="text-2xl font-bold">{currentPackage.price}</span>{' '}
              so&apos;m
            </h2>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <button className="h-10 w-32 rounded border border-neutral-300 bg-neutral-950 text-neutral-300 transition-all hover:border-neutral-100 hover:bg-opacity-75 hover:text-neutral-100">
              Qaytish
            </button>
            <button className="h-10 w-32 rounded border border-primary bg-neutral-950 text-neutral-50 transition-all hover:bg-opacity-75 hover:text-primary">
              Tolash
            </button>
          </div>
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
