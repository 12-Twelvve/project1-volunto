import React, {useState, useEffect} from 'react'
import { Box } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
//import { CardActions } from '@mui/material'
import { Button } from '@mui/material'
//import { date } from 'assert-plus'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Bottom from './Bottom';

const data1 =
    {
    img:"https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2019/03/Social-work.jpg"
    }
    

export const Events = () => {

  const handleJoin =(id)=>{
    fetch('http://localhost:5000/events/join',{
        method:"PUT",
        headers:{
            'Content-Type':'application/json',
            'Authorization':"Bearer "+ localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            Id:id
        })
    }).then(res=>res.json())
    .then( result =>{
        const newData = data.map(i =>{
            if(i._id==result._id){
                return result
            }
            else{
               return i 
            }
        })
        setdata(newData)
    }).catch(error => console.log(error))
}


    const [data, setdata] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/events/allevents')
      .then(res=>res.json())
      .then(result=>{
          setdata(result.events)
          console.log(result)
      })
      .catch(error => console.log(error))
  }, []);


    return (
      <div style={{display:"flex", flexDirection:'column'}}>
          <Typography style={{textAlign:"center",
           fontSize:'30px',
           fontWeight:"bold",
           fontFamily:'Roboto',
           color:"green",
           margin:"22px 0 30px 0",
            textDecoration:"underline", 
            textDecorationThickness:"2px",
            textUnderlineOffset:"8px",
          }}> Latest Event</Typography>
          <div style={{display:"flex", flexDirection:'column', justifyContent:"center", justifyItems:"center"}}>
                {
                    data.map(e => {
                       return <EventCard d={e}/>;
                    })
                }
                {/* mapping through every event */}
          </div>
      </div>
    )
}


const EventCard = (props) => {
    return (
        <React.Fragment>
           
      <Box sx={{ minWidth: 275 , margin:"20px auto", backgroundColor:"blue"}}>

        <Card sx={{display:"flex", maxWidth:"60vw", backgroundColor:"#f3f2f2"}} >
        <Box sx={{
        width: 300,
        height: 275,
        backgroundImage:`url(${data1.img})`,
        backgroundSize:'cover'
        }}/>
        <CardContent>
            
      <Typography sx={{fontSize:25,}} >
        {props.d.etitle}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.d.edescription}
      </Typography>
      <Typography >
        <CalendarTodayIcon fontSize="small" color="success" />
        {` `+ props.d.edate}
      </Typography>
      <Typography >
          <AccessTimeIcon fontSize="small"  color="success"/>
        {` `+ props.d.etime}
      </Typography>
      <Typography>
          <LocationOnIcon fontSize="small"  color="success"/>
        {` `+ props.d.elocation}
      </Typography>
      <Typography>
        {"join members : "}{props.d.ejoins.length}
      </Typography>
      <br/> 
      {}
      <Button  style={{backgroundColor:"#03A61C",color:'white'}} value={props.d._id}>join</Button>
      {/* <Button size="small" sx={{ backgroundColor: "#21b6ae", color:"black"}}>Join</Button> */}
    </CardContent>
        </Card>
      </Box>
      </React.Fragment>
    )
}

export default Events
