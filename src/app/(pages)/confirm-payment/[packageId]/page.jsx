'use client'

import RefillBalanceModal from 'components/RefillBalanceModal'
import Gutter from 'components/Gutter'
import CurrentPackage from './components/CurrentPackage'
import PaymentOptions from './components/PaymentOptions'
import ConfirmPaymentTab from './components/ConfirmPaymentTab'
import { useState } from 'react'

const ConfirmPayment = ({ params }) => {
  const allPackages = [...balance, ...transfers, ...maxClubMembers]
  const currentPackage = allPackages.find(
    (item) => item.id === +params.packageId
  )
  const [isModalOpen, toggleModal] = useState(false)

  const handleModal = () => {
    if (isModalOpen) {
      toggleModal(false)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'auto'
      }
    } else {
      toggleModal(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden'
      }
    }
  }

  return (
    <>
      <Gutter>
        <section className="my-8 w-full">
          <CurrentPackage currentPackage={currentPackage} />
          <PaymentOptions toggleModal={handleModal} />
          <ConfirmPaymentTab currentPackage={currentPackage} />
        </section>
      </Gutter>
      {isModalOpen && <RefillBalanceModal toggleModal={handleModal} />}
    </>
  )
}

const balance = [
  {
    id: 1,
    type: 'balance',
    amount: 110,
    price: 25000,
  },
  {
    id: 2,
    type: 'balance',

    amount: 120,
    price: 35000,
  },
  {
    id: 3,
    type: 'balance',
    amount: 130,
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
