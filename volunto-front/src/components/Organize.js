import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Bottom from './Bottom';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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

const Organize = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [volunteerNo, setVolunteerNo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(eventName, description, time, date,volunteerNo);
    fetch("http://localhost:5000/events/register" , {  
      // http://localhost:5000/events/register
      method:'post',
      headers:{
          'Content-Type':'application/json',
          'Authorization':"Bearer "+ localStorage.getItem("jwt")
      },
      body:JSON.stringify({
          etitle:eventName,
          edescription:description,
          edate:date,
          etime:time,
      }) 
  })
  .then( res => res.json())
  .then(data =>{
      if(data.error){
          // M.toast({html:data.error, classes:"red"})
          console.log(data.error)
      }
      else{
          // M.toast({html:"successfully posted :)", classes:'green'})
          // history.push('/')
          console.log('organized');
      }
  })
  .catch(err =>(console.log(err)))
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
    <Typography variant="h4" style={{fontFamily:'Roboto',fontWeight:'bold'}}>
       Organize
       </Typography>
      <TextField
        label="Name of an event"
        variant="outlined"
        required
        value={eventName}
        onChange={e => setEventName(e.target.value)}
      />

      <TextField
        label="Description of your event"
        variant="outlined"
        required
        multiline
        rows={4}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <TextField
        //label="Time"
        variant="outlined"
        type="time"
        required
        value={time}
        onChange={e => setTime(e.target.value)}
      />
      <TextField
        //label="Date"
        variant="outlined"
        type="date"
        required
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <TextField
        label="No. of volunteers required"
        variant="outlined"
        type="number"
        required
        value={volunteerNo}
        onChange={e => setVolunteerNo(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" style={{backgroundColor:"#03A61C",color:'white'}}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Organize;