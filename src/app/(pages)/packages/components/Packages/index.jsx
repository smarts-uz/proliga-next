import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import PackagesSkeleton, { PackageSkeleton } from '../PackagesSkeleton'
const PackageContainer = dynamic(() => import('../Package'), {
  ssr: false,
  loading: () => <PackageSkeleton />,
})
import { PACKAGES } from 'app/utils/packages.util'

const PaymentPackages = () => {
  const { t } = useTranslation()

  const { isLoading: packagesLoading } = useSelector((store) => store.packages)
  const { isLoading: langLoading } = useSelector((store) => store.prizes)
  const isLoading = useMemo(
    () => packagesLoading || langLoading,
    [packagesLoading, langLoading]
  )
  return (
    <>
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
    </>
  )
}

export default PaymentPackages
