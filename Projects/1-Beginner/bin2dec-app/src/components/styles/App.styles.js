import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: theme.bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

export default useStyles