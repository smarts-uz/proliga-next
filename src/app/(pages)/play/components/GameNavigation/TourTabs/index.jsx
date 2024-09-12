import Box from '@mui/material/Box'
import StyledTab from './StyledTab'
import StyledTabs from './StyledTabs'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import { setCurrentTourIndex } from 'app/lib/features/tours/tours.slice'
import { setCurrentTourTeamIndex } from 'app/lib/features/tourTeams/tourTeams.slice'
import { fetchTours } from 'app/lib/features/tours/tours.thunk'
import { selectTours } from 'app/lib/features/tours/tours.selector'

export default function TourTabs() {
  const dispatch = useDispatch()
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const selectedTours = useSelector(selectTours)
  const { currentTourIndex } = useSelector((state) => state.tours)

  useEffect(() => {
    if (currentTeam?.competition_id) {
      const fetch = async () => {
        dispatch(fetchTours({ competition_id: currentTeam.competition_id.id }))
      }
      fetch()
    }
  }, [currentTeam, dispatch])

  const getStatus = (status) => {
    if (status === TOUR.notStarted) {
      return 'Boshlanmagan'
    } else if (status === TOUR.completed) {
      return 'Tugagan'
    } else if (status === TOUR.notStartedTransfer) {
      return 'Boshlanmagan transfer mumkin'
    } else if (status === 'in_process') {
      return 'Jarayonda'
    }
    return 'Unidentified Status'
  }

  const handleClick = (index) => {
    dispatch(setCurrentTourTeamIndex(index))
    dispatch(setCurrentTourIndex(index))
  }

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#000',
        color: '#fff',
        borderRadius: '4px',
      }}
      width={'100%'}
    >
      <StyledTabs
        value={currentTourIndex}
        variant="scrollable"
        scrollButtons="auto"
        className="mt-4 rounded text-neutral-50 disabled:text-neutral-500"
        aria-label="scrollable auto tabs example "
      >
        {selectedTours?.map((item, index) => (
          <StyledTab
            key={item.id}
            onClick={() => handleClick(index)}
            className="w-48 space-y-0 disabled:cursor-default disabled:text-neutral-500 sm:w-56 md:w-64 2xl:w-72"
            icon={
              <h3 className="text-start text-sm md:text-base">{item.name}</h3>
            }
            disabled={
              item.status === 'not_started' ||
              currentTeam.registered_tour_id >= item.id
            }
            label={
              <p className="text-xs capitalize md:text-sm">
                {getStatus(item.status)}
              </p>
            }
          />
        ))}
      </StyledTabs>
    </Box>
  )
}
