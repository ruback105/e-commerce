import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  layout: {
    width: '70%',
    margin: '50px auto',
  },
  [theme.breakpoints.down('xs')]: {
    layout: {
      width: '97%',
      margin: '50px auto',
    },
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
  },
  successForm: {
    padding: '50px',
  },
}))
