import { Tab } from '@mui/material'
import { styled } from '@mui/material'

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
    marginRight: theme.spacing(0),
    textTransform: 'initial',
    minWidth: 0,
    letterSpacing: 0.5,
    margin: theme.spacing(1, 0),
    padding: 0,
    overflow: 'unset',
    fontWeight: 400,
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#fff1',
      borderRadius: '4px',
      scrollSnapAlign: 'center',
    },
    '&.Mui-disabled': {
      color: 'white',
      opacity: 0.5,
    },
  })
)

export default StyledTab
