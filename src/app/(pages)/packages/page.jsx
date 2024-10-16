'use client'
import { fetchPackages } from 'app/lib/features/packages/packages.thunk'
import Gutter from 'components/Gutter'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { PACKAGES } from 'app/utils/packages.util'
import Link from 'next/link'
const BalanceTitle = dynamic(() => import('./components/BalanceTitle'), {
  ssr: false,
})
const TransferTitle = dynamic(() => import('./components/TransferTitle'), {
  ssr: false,
})
const PackagesTitle = dynamic(() => import('./components/Title'), {
  ssr: false,
})
const SameTeamPlayerTitle = dynamic(
  () => import('./components/SameTeamPlayerTitle'),
  {
    ssr: false,
  }
)

const Packages = () => {
  const dispatch = useDispatch()
  const { packages } = useSelector((store) => store.packages)

  useEffect(() => {
    dispatch(fetchPackages())
  }, [dispatch])

  const { t } = useTranslation()
  return (
    <Gutter>
      <section className="h-full space-y-6 pb-12 pt-8 text-neutral-200">
        <PackagesTitle />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="min-h-96 space-y-4 rounded-xl border bg-black/15 p-4 backdrop-blur-md">
            <BalanceTitle />
            <div className="flex flex-col gap-4">
              {packages.map(
                (item, index) =>
                  item.type === PACKAGES.team_balance && (
                    <div
                      key={index}
                      className="xs:text-md flex items-center justify-between rounded border p-2 text-sm"
                    >
                      <span className="font-bold text-neutral-50">
                        {t('gacha oshirish ru')} {item.amount}{' '}
                        {t('gacha oshirish')}
                      </span>
                      <Link
                        href={`/confirm-payment/${item.id}`}
                        className="rounded border border-primary/50 bg-neutral-800/50 px-4 py-2 transition-all hover:border-primary hover:bg-neutral-900"
                      >
                        {t('Tanlang')}
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="min-h-96 space-y-4 rounded-xl border bg-black/15 p-4 backdrop-blur-md">
            <TransferTitle />
            <div className="flex flex-col gap-4">
              {packages.map(
                (item, index) =>
                  item.type === PACKAGES.transfer_count && (
                    <div
                      key={index}
                      className="xs:text-md flex items-center justify-between rounded border p-2 text-sm"
                    >
                      <span className="font-bold text-neutral-50">
                        {t('gacha oshirish ru')} {item.amount}{' '}
                        {t('gacha oshirish')}
                      </span>
                      <Link
                        href={`/confirm-payment/${item.id}`}
                        className="rounded border border-primary/50 bg-neutral-800/50 px-4 py-2 transition-all hover:border-primary hover:bg-neutral-900"
                      >
                        {t('Tanlang')}
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="min-h-96 space-y-4 rounded-xl border bg-black/15 p-4 backdrop-blur-md">
            <SameTeamPlayerTitle />
            <div className="flex flex-col gap-4">
              {packages.map(
                (item, index) =>
                  item.type === PACKAGES.single_club_count && (
                    <div
                      key={index}
                      className="xs:text-md flex items-center justify-between rounded border p-2 text-sm"
                    >
                      <span className="font-bold text-neutral-50">
                        {t('gacha oshirish ru')} {item.amount}{' '}
                        {t('gacha oshirish')}
                      </span>
                      <Link
                        href={`/confirm-payment/${item.id}`}
                        className="rounded border border-primary/50 bg-neutral-800/50 px-4 py-2 transition-all hover:border-primary hover:bg-neutral-900"
                      >
                        {t('Tanlang')}
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </Gutter>
  )
}

export default Packages
