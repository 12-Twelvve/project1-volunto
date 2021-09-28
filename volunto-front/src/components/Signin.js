import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
//import Bottom from './Bottom';
import { Link , useHistory} from 'react-router-dom'

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

const Signin = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history =useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    console.log( email, password);
    fetch("http://localhost:5000/login" , {  
      // http://localhost:5000/signin
      method:'post',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          email,
          password
      }) 
  }).then( res => res.json())
  .then(data =>{
      if(data.error){
          // M.toast({html:data.error, classes:"red"})
          console.log('error')
      }
      else{
          localStorage.setItem('jwt', data.token)
          localStorage.setItem('user',JSON.stringify(data.user))
          // 
          history.push('/')
      }
  })
  .catch(err =>(console.log(err)))

  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      
       <Typography variant="h4" style={{fontFamily:'Roboto',fontWeight:'bold'}}>
       Sign In
       </Typography>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
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
          Login
        </Button>
      </div>
    </form>
  );
};

export default Signin;