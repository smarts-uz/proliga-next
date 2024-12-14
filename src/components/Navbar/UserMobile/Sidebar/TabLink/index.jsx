import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarStyles } from 'app/utils/sidebarStyles.util'
import { setTab } from 'app/lib/features/tours/tours.slice'

const SidebarTabLink = ({ title, tab, toggleModal }) => {
  const dispatch = useDispatch()
  const { lastVisitedTeam } = useSelector((state) => state.currentTeam)

  const handleClick = () => {
    dispatch(setTab(tab))
    toggleModal()
  }
  console.log(tab)

  return (
    <div className="group flex w-full gap-4">
      <span
        className={`block h-full w-2 rounded-md ${sidebarStyles.passiveIndicator}`}
      />
      <Link
        className={`block h-full w-2 select-none rounded-md`}
        onClick={handleClick}
        href={'/play/' + lastVisitedTeam}
      >
        {title}
      </Link>
    </div>
  )
}

export default SidebarTabLink
