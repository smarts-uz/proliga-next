import { useSelector } from 'react-redux'
import TopTeams from '../TopTeams'
import StatisticsTable from './Table'
import StatisticsTableSkeleton from './Skeleton'

const Statistics = () => {
  const { isLoading } = useSelector((state) => state.players)

  if (isLoading) return <StatisticsTableSkeleton />

  return (
    <section className="flex w-full flex-col gap-2 lg:flex-row">
      <div className="flex h-full min-h-[40rem] w-full flex-1 table-auto flex-col gap-4 overflow-x-auto rounded-xl bg-black px-2 py-3 text-neutral-200 xs:px-3 md:p-5 lg:w-2/3">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="loader" />
          </div>
        ) : (
          <StatisticsTable />
        )}
      </div>
      <TopTeams />
    </section>
  )
}

export default Statistics
