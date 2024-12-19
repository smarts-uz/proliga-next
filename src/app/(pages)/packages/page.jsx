'use client'

import { fetchPackages } from 'app/lib/features/packages/packages.thunk'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Gutter from 'components/Gutter'
import dynamic from 'next/dynamic'
import PackagesSkeleton from './components/PackagesSkeleton'
import AnimatedBackground from 'components/AnimatedBackground'
const PaymentPackages = dynamic(() => import('./components/Packages'), {
  ssr: false,
  loading: () => <PackagesSkeleton />,
})

const Packages = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPackages())
  }, [dispatch])

  return (
    <>
      <AnimatedBackground />
      <Gutter>
        <PaymentPackages />
      </Gutter>
    </>
  )
}

export default Packages
