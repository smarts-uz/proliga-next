import { Skeleton } from '@/components/ui/skeleton'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TableSkeleton({ cols = 4 }) {
  return (
    <Table className="overflow-hidden">
      <TableHeader>
        <TableRow className="border-neutral-500 hover:bg-transparent">
          {[...Array(cols)].map((_, index) => (
            <TableHead key={index} className="w-[200px]">
              <Skeleton className="h-5 w-2/3 lg:w-24 xl:w-32" />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {[...Array(6)].map((_, rowIndex) => (
          <TableRow
            key={rowIndex}
            className="border-neutral-500 hover:bg-transparent"
          >
            {[...Array(cols)].map((_, colIndex) => (
              <TableCell key={colIndex}>
                <Skeleton className="h-6 w-full md:w-32 lg:w-40 xl:w-56" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function PageSkeleton() {
  return (
    <div className="my-6 min-h-screen w-full rounded-xl bg-neutral-900/75 px-2 py-4 shadow-md shadow-neutral-600 sm:p-4 md:p-6">
      <Skeleton className="mx-auto mb-4 h-6 w-3/5 sm:w-1/2 xl:w-2/5" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-5/6" />

      <Skeleton className="mb-4 mt-6 h-6 w-2/3" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-4/5" />

      <Skeleton className="mb-4 mt-6 h-6 w-1/2" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-11/12" />
      <div className="hidden overflow-hidden rounded-xl border border-neutral-700 md:block">
        <TableSkeleton cols={4} />
      </div>
      <div className="block overflow-hidden rounded-xl border border-neutral-700 md:hidden">
        <TableSkeleton cols={3} />
      </div>
      <Skeleton className="mb-4 mt-6 h-6 w-1/2" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-11/12" />

      <Skeleton className="mb-4 mt-6 h-6 w-1/2" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="mb-4 h-4 w-11/12" />
    </div>
  )
}
