import { Tab } from '@mui/material'
import { styled } from '@mui/material'

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#fff1',
      borderRadius: '4px',
    },
    '&.Mui-disabled': {
      color: 'white',
      opacity: 0.5,
    },
  })
)

export default StyledTab
