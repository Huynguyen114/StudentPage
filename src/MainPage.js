import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import StudentPage from './containers/StudentPage';
import Home from './Home';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import { ROUTES } from './constants';
import AdminLayoutRoute from './commons/layout/AdminLayoutRoute';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#3f51b5',
    height: '35px',
    paddingTop: '10px'
  },
  link: {
    margin: '6px auto',
    fontSize: '18px',
    fontWeight: '500',
    color: 'white',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '5px 167px',
    borderRadius: '7px',
    '&:focus': { backgroundColor: 'white', color: '#3f51b5' }
  },
  icon: {
    display: 'none'
  },
  '@media (max-width: 600px)': {
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: 'auto'
    },
    icon: {
      display: 'flex',
      fontSize: '41px',
      position: 'absolute'
    }
  }
});

export default function App() {
  const classes = useStyles();
  function renderAdminRoutes() {
    let xhtml = null;
    xhtml = ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }
  return (
    <Router>
      <MenuIcon className={classes.icon} />
      <Paper className={classes.root}>
        <Link xs={12} className={classes.link} label='Home' to='/'>
          Home
        </Link>
        <Link xs={12} className={classes.link} label='Table' to='/table'>
          Table
        </Link>
        <Link xs={12} className={classes.link} label='About' to='/about'>
          About
        </Link>
      </Paper>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/table'>
          <StudentPage />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        {renderAdminRoutes()}
      </Switch>
    </Router>
  );
}
