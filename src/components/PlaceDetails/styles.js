import { createTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const theme = createTheme()

const createObj = (theme) => ({
  chip: {
    margin: '5px 5px 5px 0'
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

const obj = createObj(theme)

const useStyle = makeStyles(obj)


export default useStyle
