import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Bottom from './Bottom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
  // 
  fetch("http://localhost:5000/signup" , {  
      // http://localhost:5000/signup
      method:'post',
      // mode:'no-cors',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          firstName,
          lastName,
          email,
          password
      }) 
  }).then( res => res.json())
  .then(data =>{
      if(data.error){
         console.log('error')
      }
      else{
          console.log("registered")
      }
  })
  .catch(err =>(console.log(err)))
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" >
          Cancel
        </Button>
        <Button type="submit" variant="contained" style={{backgroundColor:"#03A61C",color:'white'}}>
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;