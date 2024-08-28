import Box from '@mui/material/Box'
import { useState } from 'react'
import StyledTab from './StyledTab'
import StyledTabs from './StyledTabs'

export default function TourTabs() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
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
        <StyledTab className="md:w-40" label="Item One" />
        <StyledTab className="md:w-40" label="Item Two" />
        <StyledTab className="md:w-40" label="Item Three" />
        <StyledTab className="md:w-40" label="Item Four" />
        <StyledTab className="md:w-40" label="Item Five" />
        <StyledTab className="md:w-40" label="Item Six" />
        <StyledTab className="md:w-40" label="Item Seven" />
      </StyledTabs>
    </Box>
  )
}
