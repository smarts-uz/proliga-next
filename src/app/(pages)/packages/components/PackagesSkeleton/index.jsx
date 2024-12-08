import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const PackagesSkeleton = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="space-y-6 py-8">
        <Skeleton className="h-8 w-1/3" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((cardIndex) => (
            <Card
              key={cardIndex}
              className="bg-black/20 backdrop-blur-md transition-all hover:bg-black/40"
            >
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6 w-3/4" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between rounded border border-neutral-50/30 p-2"
                  >
                    <Skeleton className="h-4 w-1/2" />
                    <Button variant="outline" size="sm" asChild>
                      <div>
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PackagesSkeleton
