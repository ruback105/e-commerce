import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    overflowWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '75px',
  },
}))
