import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  addressForm: {
    margin: '0 50px',
  },
  paymentForm: {
    padding: '16px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addressButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
  },
  [theme.breakpoints.down('xs')]: {
    addressForm: {
      margin: '0 20px',
    },
  },
}))
