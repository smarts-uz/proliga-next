import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import StyledTab from './StyledTab'
import StyledTabs from './StyledTabs'
import { useSelector } from 'react-redux'
import { useGetTours } from 'app/hooks/transfer/useGetTours/useGetTours'

export default function TourTabs() {
  const [value, setValue] = useState(0)
  const { team, tour } = useSelector((state) => state.game)
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const getStatus = (status) => {
    if (status === 'not_started') {
      return 'Boshlanmagan'
    } else if (status === 'completed') {
      return 'Tugagan'
    } else if (status === 'not_started_transfer') {
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
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        className="mt-4 rounded text-white"
        aria-label="scrollable auto tabs example "
      >
        {tour &&
          tour.map((item, index) => (
            <StyledTab
              key={item.id}
              className="md:w-48"
              icon={
                <h3 className="text-start text-sm md:text-base">
                  {index + 1} Tur
                </h3>
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
