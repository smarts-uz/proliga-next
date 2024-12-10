import Box from '@mui/material/Box'
import StyledTab from './StyledTab'
import StyledTabs from './StyledTabs'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOUR } from 'app/utils/tour.util'
import { setCurrentTourIndex } from 'app/lib/features/tours/tours.slice'
import { setCurrentTourTeam } from 'app/lib/features/tourTeams/tourTeams.slice'
import { selectTours } from 'app/lib/features/tours/tours.selector'
import { emptyTeamPlayers } from 'app/lib/features/teamPlayers/teamPlayers.slice'
import { useTranslation } from 'react-i18next'
import { tabsClasses } from '@mui/material'
import { LANGUAGE } from 'app/utils/languages.util'

export default function TourTabs() {
  const dispatch = useDispatch()
  const { currentCompetition } = useSelector((state) => state.competition)
  const selectedTours = useSelector(selectTours)
  const { currentTour, currentTourIndex, registeredTour } = useSelector(
    (state) => state.tours
  )
  const { currentTourTeamIndex, tourTeams } = useSelector(
    (state) => state.tourTeams
  )
  const { lang } = useSelector((store) => store.systemLanguage)

  useEffect(() => {
    if (
      currentTourIndex !== currentTourTeamIndex &&
      selectTours?.length > 0 &&
      tourTeams?.length > 0
    ) {
      dispatch(setCurrentTourTeam(currentTour))
    }
  }, [dispatch, currentTourIndex, currentTourTeamIndex, tourTeams, currentTour])

  useEffect(() => {
    if (
      currentCompetition?.id &&
      currentTourIndex &&
      selectTours?.length > 0 &&
      tourTeams?.length > 0
    ) {
      dispatch(setCurrentTourTeam(currentTour))
    }
  }, [dispatch, currentCompetition, currentTourIndex, tourTeams, currentTour])

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

  const handleClick = (index, item) => {
    if (currentTourIndex !== index) {
      dispatch(emptyTeamPlayers())
    }
    dispatch(setCurrentTourTeam(item))
    dispatch(setCurrentTourIndex(index))
  }
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
        className="snap-x snap-center rounded text-neutral-50 fade-in disabled:text-neutral-500"
        aria-label="tour tabs"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.4 },
          },
        }}
      >
        {selectedTours?.map((item, index) => (
          <StyledTab
            key={item.id}
            onClick={() => handleClick(index, item)}
            className="w-32 snap-center space-y-0 rounded hover:bg-primary hover:bg-opacity-10 disabled:cursor-default sm:w-48"
            disabled={
              item.status === TOUR.notStarted ||
              item.status === TOUR.notStartedTransfer ||
              item.order < registeredTour?.order
            }
            label={
              <div className="flex h-12 flex-col items-center justify-start gap-1 sm:h-[3.75rem]">
                <h3 className="text-start text-xs font-medium text-neutral-50 md:text-sm xl:text-base">
                  {lang === LANGUAGE.uz ? item?.name : item?.name_ru}
                </h3>
                <p className="max-w-28 text-[10px] capitalize text-neutral-200 sm:text-xs">
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
