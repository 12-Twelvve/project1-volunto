import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Cards from './components/Cards';
import Events from './components/Events';
import Form from './components/Form';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Signin from './components/Signin';
import Organize from './components/Organize';


const useStyles = makeStyles((theme) => ({
  root: {
    //minHeight: '90vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/children1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height:'76rem',
    backgroundAttachment: 'fixed'
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Router>
      <Header />
      <CssBaseline />
        <Switch>
      <Route exact path="/organize" component={Organize} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/signup" component={Form} />
      <Route exact path="/signin" component={Signin} />
          <Route exact path="/">
              <Cards />
              <Events />
          </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}
