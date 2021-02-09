import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  cartContainer: {
    margin: '50px auto',
    width: '90%',
  },
  cardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    cardDetails: {
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
    },
  },
  [theme.breakpoints.down('xs')]: {
    emptyButton: {
      margin: '10px 0',
      width: '100%',
    },
    checkoutButton: {
      margin: '10px 0',
      width: '100%',
    },
  },
  emptyButton: {
    marginRight: '10px',
    border: '1px solid rgba(245, 0, 87)',
    backgroundColor: 'rgba(245, 0, 87)',
    color: '#fff',
  },
  checkoutButton: {
    border: '1px solid #3f51b5',
    backgroundColor: '#3f51b5',
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
    fontWeight: '700',
    color: 'blue',
  },
}))
