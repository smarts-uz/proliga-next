'use client'

import Gutter from 'components/Gutter'
import CurrentPackage from './components/CurrentPackage'
import PaymentOptions from './components/PaymentOptions'
import ConfirmPaymentTab from './components/ConfirmPaymentTab'

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
        <ConfirmPaymentTab currentPackage={currentPackage} />
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
