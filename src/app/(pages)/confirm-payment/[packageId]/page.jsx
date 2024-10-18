'use client'

import RefillBalanceModal from 'components/RefillBalanceModal'
import Gutter from 'components/Gutter'
import dynamic from 'next/dynamic'
const CurrentPackage = dynamic(() => import('./components/CurrentPackage'), {
  ssr: false,
})
const PaymentOptions = dynamic(() => import('./components/PaymentOptions'), {
  ssr: false,
})
const ConfirmPaymentTab = dynamic(
  () => import('./components/ConfirmPaymentTab'),
  {
    ssr: false,
  }
)
import Spinner from 'components/Spinner'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPackages } from 'app/lib/features/packages/packages.thunk'

const ConfirmPayment = ({ params }) => {
  const dispatch = useDispatch()
  const { packages, isLoading } = useSelector((store) => store.packages)
  const [currentPackage, setCurrentPackage] = useState({})

  useEffect(() => {
    setCurrentPackage(packages.find((item) => +item.id === +params.packageId))
  }, [params, packages])

  useEffect(() => {
    dispatch(fetchPackages())
  }, [dispatch])

  return (
    <Gutter>
      {isLoading ? (
        <Spinner />
      ) : (
        currentPackage && (
          <section className="my-4 flex min-h-[85vh] w-full flex-col">
            <CurrentPackage currentPackage={currentPackage} />
            <PaymentOptions />
            <ConfirmPaymentTab currentPackage={currentPackage} />
          </section>
        )
      )}
    </Gutter>
  )
}

export default ConfirmPayment
