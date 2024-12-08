'use client'

import { fetchPackages } from 'app/lib/features/packages/packages.thunk'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { PACKAGES } from 'app/utils/packages.util'
import Gutter from 'components/Gutter'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AnimatedBackground from 'components/AnimatedBackground'

import { Zap, Users, CircleDollarSign } from 'lucide-react'

const PackageIcon = ({ type }) => {
  switch (type) {
    case PACKAGES.team_balance:
      return <CircleDollarSign className="h-6 w-6 text-yellow-500" />
    case PACKAGES.transfer_count:
      return <Zap className="h-6 w-6 text-yellow-500" />
    case PACKAGES.single_club_count:
      return <Users className="h-6 w-6 text-yellow-500" />
    default:
      return null
  }
}

const Packages = () => {
  const dispatch = useDispatch()
  const { packages, isLoading } = useSelector((store) => store.packages)

  useEffect(() => {
    dispatch(fetchPackages())
  }, [dispatch])

  const getPackageTitle = (type) => {
    switch (type) {
      case PACKAGES.team_balance:
        return t('Balans')
      case PACKAGES.transfer_count:
        return t('Transfer')
      case PACKAGES.single_club_count:
        return t('Bir jamoa oyinchilari')
      default:
        return ''
    }
  }

  const { t } = useTranslation()
  return (
    <>
      <AnimatedBackground />
      <Gutter>
        {isLoading ? (
          <div></div>
        ) : (
          <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-center text-3xl font-bold text-neutral-100">
              {t('O‘yiningizni mukammallikka yetkazing')}
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.values(PACKAGES).map((packageType) => (
                <Card
                  key={packageType}
                  className="border-yellow-500 bg-neutral-900 transition-all hover:border-yellow-400"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-neutral-100">
                        {getPackageTitle(packageType)}
                      </CardTitle>
                      <PackageIcon type={packageType} />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Separator className="mb-4 bg-yellow-500/20" />
                    <div className="space-y-4">
                      {packages
                        .filter((item) => item.type === packageType)
                        .map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded bg-neutral-800 p-2 transition-all hover:bg-neutral-700"
                          >
                            <div className="flex items-center space-x-2">
                              <Badge
                                variant="outline"
                                className="border border-yellow-500 bg-yellow-500/10 text-yellow-400"
                              >
                                +{item.amount}
                              </Badge>
                              <span className="text-sm text-neutral-300">
                                ga oshirish
                              </span>
                            </div>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="bg-yellow-500 text-neutral-900 transition-all hover:bg-yellow-400 hover:text-neutral-900"
                            >
                              <Link href={`/confirm-payment/${item.id}`}>
                                {t('Tanlash')}
                              </Link>
                            </Button>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Gutter>
    </>
  )
}

export default Packages
