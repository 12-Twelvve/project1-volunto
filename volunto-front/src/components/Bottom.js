import React from 'react'
import  Button  from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    btn:{
        backgroundColor:'#03A61C',
        color:'white',
      },
    }));


export default function Bottom(props) {
    const classes=useStyles();
    return (        
        <div>
            <Button variant="contained" className={classes.btn} size="large">{props.name}</Button>
        </div>
    )
}




