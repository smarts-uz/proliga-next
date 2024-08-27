import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { styled } from '@mui/material'

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    // maxWidth: 40,
    width: '100%',
    borderRadius: '2px',
    backgroundColor: '#fff400',
  },
})

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    // width: '160px',
    minWidth: { xs: '80px', sm: '160px' },
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#fff1',
      borderRadius: '4px',
    },
  })
)

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
