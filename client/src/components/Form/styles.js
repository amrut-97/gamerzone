
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '95%',
    margin: '10px 0',
  },
  buttonSubmit: {
    width: '95%',
    marginBottom: 10,
  },
  buttonClear: {
    width: '95%',
    marginBottom: 4,
  }
}));
