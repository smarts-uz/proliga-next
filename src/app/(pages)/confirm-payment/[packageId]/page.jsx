'use client'

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
import { useRouter } from 'next/navigation'
import { PAYMENTOPTIONS } from 'app/utils/paymentOptions.util'
import { setCurrentPackage } from 'app/lib/features/packages/packages.slice'

const ConfirmPayment = ({ params }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [paymentOption, setPaymentOption] = useState(PAYMENTOPTIONS.WALLET)
  const { packages, isLoading, currentPackage } = useSelector(
    (store) => store.packages
  )
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { currentTour } = useSelector((state) => state.tours)
  const { currentCompetition } = useSelector((state) => state.competition)
  const { userTable } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(setCurrentPackage(+params.packageId))
  }, [params, packages, dispatch])

  useEffect(() => {
    dispatch(fetchPackages())
  }, [dispatch])

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  useEffect(() => {
    if (!currentTeam || !currentTour || !currentCompetition || !userTable) {
      router.push('/championships')
    }
  }, [currentTeam, currentTour, currentCompetition, router, userTable])

  return (
    <Gutter>
      {isLoading ? (
        <Spinner />
      ) : (
        currentPackage && (
          <section className="my-4 flex min-h-[85vh] w-full flex-col">
            <CurrentPackage />
            <PaymentOptions
              paymentOption={paymentOption}
              setPaymentOption={setPaymentOption}
            />
            <ConfirmPaymentTab paymentOption={paymentOption} />
          </section>
        )
      )}
    </Gutter>
  )
}

export default ConfirmPayment
