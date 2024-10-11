import Box from '@mui/material/Box'
import StyledTab from './StyledTab'
import StyledTabs from './StyledTabs'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import {
  setCurrentTourIndex,
  setRegisteredTour,
} from 'app/lib/features/tours/tours.slice'
import { setCurrentTourTeamIndex } from 'app/lib/features/tourTeams/tourTeams.slice'
import { selectTours } from 'app/lib/features/tours/tours.selector'
import { emptyTeamPlayers } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { useTranslation } from 'react-i18next'
import { setMatchesTourIndex } from 'app/lib/features/matches/matches.slice'

export default function TourTabs() {
  const dispatch = useDispatch()
  const { currentTeam } = useSelector((state) => state.currentTeam)
  const { currentCompetition } = useSelector((state) => state.competition)
  const selectedTours = useSelector(selectTours)
  const { currentTourIndex, tours, registeredTour } = useSelector(
    (state) => state.tours
  )
  const { currentTourTeamIndex, tourTeams } = useSelector(
    (state) => state.tourTeams
  )

  useEffect(() => {
    if (
      currentTourIndex !== currentTourTeamIndex &&
      selectTours?.length > 0 &&
      tourTeams?.length > 0
    ) {
      dispatch(setMatchesTourIndex(currentTourIndex))
      dispatch(setCurrentTourTeamIndex(currentTourIndex))
    }
  }, [dispatch, currentTourIndex, currentTourTeamIndex, tourTeams])

  useEffect(() => {
    if (
      currentCompetition?.id &&
      currentTourIndex &&
      selectTours?.length > 0 &&
      tourTeams?.length > 0
    ) {
      dispatch(setMatchesTourIndex(currentTourIndex))
      dispatch(setCurrentTourTeamIndex(currentTourIndex))
    }
  }, [dispatch, currentCompetition, currentTourIndex, tourTeams])

  const { t } = useTranslation()

  const getStatus = (status) => {
    if (status === TOUR.notStarted) {
      return t('Boshlanmagan')
    } else if (status === TOUR.completed) {
      return t('Tugagan')
    } else if (status === TOUR.notStartedTransfer) {
      return t('Boshlanmagan transfer mumkin')
    } else if (status === 'in_process') {
      return t('Jarayonda')
    }
    return 'Unidentified Status'
  }

  const handleClick = (index) => {
    if (currentTourIndex !== index) {
      dispatch(emptyTeamPlayers())
    }
    dispatch(setCurrentTourTeamIndex(index))
    dispatch(setCurrentTourIndex(index))
    dispatch(setMatchesTourIndex(index))
  }

  useEffect(() => {
    if (currentTeam?.registered_tour_id && tours?.length > 0) {
      dispatch(setRegisteredTour(currentTeam?.registered_tour_id))
    }
  }, [currentTeam, tours, dispatch])

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#000',
        color: '#fff',
        borderRadius: '4px',
        minHeight: '64px',
      }}
      width={'100%'}
    >
      <StyledTabs
        value={currentTourIndex}
        variant="scrollable"
        scrollButtons="auto"
        className="rounded text-neutral-50 fade-in disabled:text-neutral-500"
        aria-label="scrollable auto tabs example "
      >
        {selectedTours?.map((item, index) => (
          <StyledTab
            key={item.id}
            onClick={() => handleClick(index)}
            className="w-40 space-y-0 hover:bg-primary hover:bg-opacity-10 disabled:cursor-default sm:w-56 md:w-64 2xl:w-72"
            disabled={
              item.status === 'not_started' ||
              item.order < registeredTour?.order
            }
            label={
              <div className="flex flex-col items-center justify-center gap-1">
                <h3 className="text-start text-xs font-medium text-neutral-50 md:text-sm xl:text-base">
                  {item.name}
                </h3>
                <p className="text-[9px] capitalize text-neutral-200 sm:text-xs md:text-sm">
                  {getStatus(item.status)}
                </p>
              </div>
            }
          />
        ))}
      </StyledTabs>
    </Box>
  )
}
