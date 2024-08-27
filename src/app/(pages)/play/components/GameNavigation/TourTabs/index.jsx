import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { styled } from '@mui/material/styles'

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
        color: '#ff4400',
        // textColor="#ff4400"
      }}
      width={'100%'}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        className="mt-4 rounded  text-white "
        aria-label="scrollable auto tabs example"
      >
        <Tab className="w-40 text-white" label="Item One"  />
        <Tab className="w-40 text-white" label="Item Two" />
        <Tab className="w-40 text-white" label="Item Three" />
        <Tab className="w-40 text-white" label="Item Four" />
        <Tab className="w-40 text-white" label="Item Five" />
        <Tab className="w-40 text-white" label="Item Six" />
        <Tab className="w-40 text-white" label="Item Seven" />
      </Tabs>
    </Box>
  )
}
