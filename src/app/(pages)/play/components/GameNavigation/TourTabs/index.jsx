import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import StyledTab from './StyledTab'
import StyledTabs from './StyledTabs'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTours } from 'app/hooks/transfer/useGetTours/useGetTours'
import { TOUR } from 'app/utils/tour.utils'
import { setCurrentTour } from 'app/lib/features/game/game.slice'

export default function TourTabs() {
  const dispatch = useDispatch()
  const { team, tours, currentTour } = useSelector((state) => state.game)
  const { getTours, isLoading, data, error } = useGetTours()

  useEffect(() => {
    if (team) {
      const fetch = async () => {
        await getTours({ competition_id: team.competition_id.id })
      }
      fetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team])

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
        value={currentTour}
        // onChange={(e) => dispatch(setCurrentTour(e.target.value))}
        variant="scrollable"
        scrollButtons="auto"
        className="mt-4 rounded text-white"
        aria-label="scrollable auto tabs example "
      >
        {tours?.map((item, index) => (
          <StyledTab
            key={item.id}
            onClick={() => dispatch(setCurrentTour(index))}
            className="space-y-0 disabled:cursor-default disabled:text-neutral-500 md:w-48 lg:w-56 xl:w-64"
            icon={
              <h3 className="text-start text-sm md:text-base">
                {index + 1} Tur
              </h3>
            }
            disabled={item.status === 'not_started'}
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
