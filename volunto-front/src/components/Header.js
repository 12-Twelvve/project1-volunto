import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
//import SortIcon from '@material-ui/icons/Sort';
import  Button  from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Bottom from './Bottom';
import About  from './About';
//import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    height: '100vh',
    fontFamily: 'Roboto',
  },
  appbar: {
    background: 'none',
    //opacity:'10%'
    backgroundColor:'Black',
    
  },

  appbarTitle: {
    //flexGrow: '1',
    //color:'#03A61C',
    color:'white',
    //opacity:'100%',
    //fontSize:'1.5rem',
    marginLeft:'0.8rem',
    fontWeight:'bold'

  },
  // icon: {
  //   color: '#03A61',
  //   fontSize: '2rem',
  // },

  navbtn:{
    paddingLeft:'45rem',
    // alignItems:'right',
    // alignContent:'right',
  },
  // links:{
  //   paddingRight:'-120rem',
  // },

  colorText: {
    color: '#BFBFBF',
    fontSize:'1rem'
  },
  container: {
    textAlign: 'left',
    marginLeft:'2rem',
    marginTop:'7.5rem',
  },
  title: {
    color: '#fff',
    //color: '#03A61C',
    fontSize: '3rem',
    marginTop:'5rem'
  },
  
  goDown: {
    color: '#5AFF3D',
    fontSize: '2rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
        <h1 className={classes.appbarTitle}>
            Volunto
          </h1>
          {/* <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton> */}

          <Button color="inherit" href="/" className={classes.navbtn}>
            Home
          </Button>

          <Button color="inherit" href="/organize" >
            Organize
          </Button>

          <Button color="inherit" href="/events" >
            Events
          </Button>

          <Button color="inherit" href="/signup" >
            Sign Up
          </Button>
          <Button color="inherit" href="/signin" >
            LogIn
          </Button>

        </Toolbar>
      </AppBar>

      {/* <Router>
        <Switch>
            <div className="homepage">
          <Route exact path="/about" component={About} />
          <Route exact path="/">
          </Route>
            </div>
        </Switch>
      </Router> */}

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            WE RISE BY LIFTING OTHERS <br /></h1>
            <p className={classes.colorText}>Volunteering is a way of helping others. It is giving a person's time and ability to help
            <br /> someone who may be in need of help. Not only does volunteering help others, but 
            <br />what others may not know is that it can be helpful to themselves. It is a great way 
            <br />for someone to interact with others in his/her community. It gives someone the
            <br /> time to his/herself while also creating bonds when he or she are doing the greater
            <br /> good. The effects of volunteering can range from many helpful characteristics</p>
          
          <Scroll to="cards" smooth={true}>
            <Bottom name="Get Started" />
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
