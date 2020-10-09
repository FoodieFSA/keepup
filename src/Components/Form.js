import React from 'react';
import { TextField, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 0',
  },
  input: {
    color: 'white',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#282c34',
    border: '2px solid #000',
    padding: '20px',
    outline: 'none',
  },
  button: {
    margin: '10px',
  },
}));

const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
};

const Form = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SignUpBody = (
    <div id='sign-up' style={modalStyle} className={classes.paper}>
      <form className='sign-in-form' autoComplete='off'>
        <TextField
          id='standard-basic'
          className={classes.root}
          InputLabelProps={{ className: classes.input }}
          label='First Name'
          type='text'
          name='firstName'
        />
        <TextField
          id='standard-basic'
          className={classes.root}
          InputLabelProps={{ className: classes.input }}
          label='Last Name'
          type='text'
          name='lastName'
        />
        <TextField
          id='standard-basic'
          className={classes.root}
          InputLabelProps={{ className: classes.input }}
          label='Email'
          type='email'
          name='email'
        />
        <TextField
          id='standard-basic'
          className={classes.root}
          InputLabelProps={{ className: classes.input }}
          label='Password'
          type='password'
          name='password'
        />
        <Button variant='contained' color='primary' className={classes.button}>
          Submit
        </Button>
      </form>
    </div>
  );
  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Sign Up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default SignUp;
