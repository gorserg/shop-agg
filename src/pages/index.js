import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../containers/Home';
import Setting from '../containers/Setting';
import MainLayout from '../layouts/MainLayout';
import EmptyLayout from '../layouts/EmptyLayout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    height: '100vh',
  },
});

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class Index extends React.Component {

    render() {
    const { classes, settings } = this.props;
    return (
      <MuiThemeProvider theme={settings.theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Router>
            <Switch>
              <DashboardRoute path="/dashboard" component={Home} />
              <DashboardRoute path="/setting" component={Setting} />
              <DashboardRoute exact path="/" component={Home} />
              <EmptyRoute component={NotFound} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Index));
