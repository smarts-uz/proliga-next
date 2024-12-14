import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const AuthSkeleton = () => {
  return (
    <section className="mx-4 mb-8 mt-24 flex w-full max-w-[28rem] flex-col gap-4 bg-black sm:mx-0 2xl:mt-32">
      <AuthTabsSkeleton />
      <LoginFormSkeleton />
    </section>
  )
}

export const LoginFormSkeleton = () => {
  return (
    <Card className="w-full max-w-[28rem] bg-neutral-950 shadow shadow-neutral-500">
      <CardHeader>
        <CardTitle>
          <Skeleton className="mb-6 h-9 w-3/4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-12 w-full" />
      </CardContent>
    </Card>
  )
}

export const SignUpFormSkeleton = () => {
  return (
    <Card className="w-full max-w-[28rem] bg-neutral-950 shadow shadow-neutral-500">
      <CardHeader>
        <CardTitle>
          <Skeleton className="mb-6 h-8 w-3/4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-12 w-full" />
      </CardContent>
    </Card>
  )
}

export const AuthTabsSkeleton = () => {
  return (
    <div className="flex space-x-1 rounded bg-neutral-900 p-1">
      <Skeleton className="h-8 flex-1 rounded bg-black" />
      <Skeleton className="h-8 flex-1 rounded bg-neutral-800" />
    </div>
  )
}

export default AuthSkeleton
