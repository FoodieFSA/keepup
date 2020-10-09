import React from 'react';
import { TextField, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
    minHeight: 200,
  },
  button: {
    margin: '10px',
  },
});

const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
};

const LogIn = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div id='log-in' style={modalStyle} className={classes.paper}>
      <form className='sign-in-form' autoComplete='off'>
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
        <Button variant='contained' color='primary'>
          Log In
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Log In
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

export default LogIn;
