'use client'

import { fetchPackages } from 'app/lib/features/packages/packages.thunk'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { PACKAGES } from 'app/utils/packages.util'
import Gutter from 'components/Gutter'
import dynamic from 'next/dynamic'
import PackagesSkeleton, {
  PackageSkeleton,
} from './components/PackagesSkeleton'
import AnimatedBackground from 'components/AnimatedBackground'
const PackageContainer = dynamic(() => import('./components/Package'), {
  loading: () => <PackageSkeleton />,
})

const Packages = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.packages)

  useEffect(() => {
    dispatch(fetchPackages())
  }, [dispatch])

  return (
    <>
      <AnimatedBackground />
      <Gutter>
        {isLoading ? (
          <PackagesSkeleton />
        ) : (
          <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-center text-xl font-bold text-neutral-100 sm:text-2xl lg:text-3xl">
              {t('O‘yiningizni mukammallikka yetkazing')}
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.values(PACKAGES).map((packageType) => (
                <PackageContainer key={packageType} packageType={packageType} />
              ))}
            </div>
          </div>
        )}
      </Gutter>
    </>
  )
}

export default Packages
