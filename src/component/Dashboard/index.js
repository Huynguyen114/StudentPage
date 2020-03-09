import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header />
        {/* <Sidebar /> */}
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
