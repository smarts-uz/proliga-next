'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setTab } from 'app/lib/features/tours/tours.slice'
import { sidebarStyles } from 'app/utils/sidebarStyles.util'

const SidebarTab = ({ title, tab, toggleModal }) => {
  const dispatch = useDispatch()
  const { gameTab } = useSelector((state) => state.tours)
  const { currentTeam } = useSelector((state) => state.currentTeam)

  const handleClick = () => {
    if (currentTeam?.is_team_created) {
      dispatch(setTab(tab))
      toggleModal()
    }
  }

  return (
    <div className="group flex w-full gap-4">
      <span
        className={`block h-full w-2 rounded-md ${currentTeam?.is_team_created ? (gameTab === tab ? sidebarStyles.activeIndicator : sidebarStyles.passiveIndicator) : sidebarStyles.disabledIndicator}`}
      />
      <button
        className={`select-none transition-all hover:text-white ${currentTeam?.is_team_created ? (gameTab === tab ? sidebarStyles.active : sidebarStyles.passive) : sidebarStyles.disabled}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  )
}

export default SidebarTab
