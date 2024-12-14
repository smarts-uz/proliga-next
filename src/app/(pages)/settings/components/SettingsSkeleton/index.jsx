import Gutter from 'components/Gutter'
import { Skeleton } from '@/components/ui/skeleton'

export default function SettingsSkeleton() {
  return (
    <Gutter>
      <div className="z-40 flex h-full min-h-[44rem] flex-col gap-2 lg:flex-row xl:min-h-[37rem] 2xl:min-h-[39rem]">
        <Skeleton className="h-14 w-full rounded-xl bg-neutral-900/90 lg:w-64 xl:min-h-[37rem] 2xl:min-h-[39rem]" />
        <Skeleton className="w-full flex-1 rounded-xl bg-neutral-900/90 md:min-h-[44rem] xl:min-h-[37rem] 2xl:min-h-[39rem]" />
      </div>
    </Gutter>
  )
}

export function ProfileSkeleton() {
  return (
    <Skeleton className="flex h-full flex-col gap-2 bg-neutral-800 md:min-h-[44rem] lg:flex-row xl:min-h-[37rem] 2xl:min-h-[39rem]" />
  )
}

export function NavigationSkeleton() {
  return (
    <Skeleton className="h-14 w-full rounded-xl bg-neutral-800 lg:w-64 xl:min-h-[37rem] 2xl:min-h-[39rem]" />
  )
}
