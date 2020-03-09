import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { addStudent, displayFormAdd } from '../actions';
import { connect } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1)
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  title: {
    position: 'absolute'
  },
  icon: {
    position: 'relative',
    left: '199px',
    bottom: '11px'
  },
  alert: {
    position: 'relative',
    left: '408px',
    bottom: '37px'
  }
}));

function FormAddStudent(props) {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();

  function addStudent(data, e) {
    e.preventDefault();
    if (data) {
      props.addStudent(data);
      props.displayFormAdd();
    }
  }
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography className={classes.title} component='h1' variant='h5'>
          Form Information Student
        </Typography>
        <CancelIcon className={classes.icon} onClick={props.displayFormAdd} />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
                inputRef={register({ required: true })}
              />
              {errors.firstName && (
                <Alert severity='error'>Please fill First Name</Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                inputRef={register({ required: true })}
              />
              {errors.lastName && 'Please fill Last name'}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                type='email'
                autoComplete='email'
                inputRef={register({
                  required: true,
                  pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                })}
              />
              {errors.email &&
                errors.email.type === 'required' &&
                'Please fill your email'}
              {errors.email &&
                errors.email.type === 'pattern' &&
                'Please check email'}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='hobby'
                name='hobby'
                variant='outlined'
                fullWidth
                id='hobby'
                label='Hobby'
                autoFocus
                inputRef={register({ required: true })}
              />
              {errors.hobby && 'Please fill hobby'}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                fullWidth
                id='loacation'
                label='Location'
                name='location'
                autoComplete='location'
                inputRef={register({ required: true })}
              />
              {errors.location && 'Please fill location'}
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleSubmit((data, e) => addStudent(data, e))}
            >
              Add Student
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    addStudent(student) {
      dispatch(addStudent(student));
    },
    displayFormAdd: () => {
      dispatch(displayFormAdd());
    }
  };
}
function mapStateToProps(state) {
  return {
    display: state.students.display
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FormAddStudent);
