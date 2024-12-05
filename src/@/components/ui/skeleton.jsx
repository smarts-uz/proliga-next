import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-neutral-700', className)}
      {...props}
    />
  )
}

export { Skeleton }
