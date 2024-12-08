import { PACKAGES } from 'app/utils/packages.util'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
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

const PackagesSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="mx-auto mb-8 h-10 w-3/5" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.values(PACKAGES).map((packageType) => (
          <Card
            key={packageType}
            className="border-yellow-500 bg-neutral-900 transition-all hover:border-yellow-400"
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold text-neutral-100">
                  <Skeleton className="h-6 w-24" />
                </CardTitle>
                <PackageIcon type={packageType} />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <Separator className="mb-4 bg-yellow-500/20" />
              <div className="space-y-4">
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded bg-neutral-800 p-2 transition-all hover:bg-neutral-700"
                  >
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-6 w-12" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-9 w-20" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export const PackageSkeleton = () => {
  return (
    <Card className="border-yellow-500 bg-neutral-900 transition-all hover:border-yellow-400">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-neutral-100">
            <Skeleton className="h-6 w-24" />
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <Separator className="mb-4 bg-yellow-500/20" />
        <div className="space-y-4">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded bg-neutral-800 p-2 transition-all hover:bg-neutral-700"
            >
              <div className="flex items-center space-x-2">
                <Skeleton className="h-6 w-12" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-9 w-20" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PackagesSkeleton
