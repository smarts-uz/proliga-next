import TopTeams from '../TopTeams'
import JournalPagination from './Pagination'
import JournalTable from './Table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserActivity } from 'app/lib/features/userActivity/userActivity.thunk'
import { useState, useEffect } from 'react'

export default function Journal() {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(12)
  const [windowWidth, setWindowWidth] = useState(0)
  const { currentCompetition } = useSelector((store) => store.competition)
  const { season } = useSelector((state) => state.season)
  const { userTable } = useSelector((state) => state.auth)
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { isLoading } = useSelector((state) => state.userActivity)

  useEffect(() => {
    if (currentCompetition?.id && season?.id && currentTeam?.id) {
      dispatch(
        fetchUserActivity({
          competition_id: currentCompetition?.id,
          user_id: userTable?.id,
          team_id: currentTeam?.id,
          page,
          perPage,
        })
      )
    }
  }, [
    dispatch,
    currentCompetition,
    season,
    page,
    perPage,
    userTable,
    currentTeam,
  ])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (windowWidth >= 520) {
      setPerPage(13)
    } else {
      setPerPage(12)
    }
  }, [windowWidth])

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1)
  }
  const decrementPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0))
  }
  return (
    <div className="flex w-full flex-col gap-2 lg:flex-row">
      <section className="flex h-auto min-h-[40rem] w-full flex-1 table-auto flex-col overflow-x-auto rounded-2xl bg-black px-2 py-4 text-neutral-200 xs:p-4 xs:px-3 md:p-5 lg:w-2/3">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="loader" />
          </div>
        ) : (
          <>
            <JournalTable />
            <JournalPagination
              incrementPage={incrementPage}
              decrementPage={decrementPage}
              page={page}
              perPage={perPage}
            />
          </>
        )}
      </section>
      <TopTeams />
    </div>
  )
}
