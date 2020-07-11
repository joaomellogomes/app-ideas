import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    height: '80%',
    maxHeight: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('xs')]: {
      width: '90%'
    },

    [theme.breakpoints.up('sm')]: {
      width: '80%'
    },

    '& > fieldset': {
      height: '100%',
      width: '100%',
      overflowY: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 30,
      boxShadow: '4px 5px 18px 3px #7b7b7b',
      border: 'none',
      position: 'relative',

      '& > legend': {
        color: 'white',
        // fontSize: '1.6rem',
        textShadow: '4px 4px 8px black',
        letterSpacing: '1.5px',

        [theme.breakpoints.up('xs')]: {
          fontSize: '1.2rem'
        },

        [theme.breakpoints.up('sm')]: {
          fontSize: '2rem'
        }
      },

      '& > div': {
        position: 'absolute',
        bottom: '40px',
        height: '70%',
        width: '90%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  }
}))

export default useStyles
