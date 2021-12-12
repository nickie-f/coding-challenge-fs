import React from 'react';
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';
import HomePage from '../pages/homePage';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        {/* Home */}
        <Route path='/' component={HomePage}/>
        {/* PAGE NOT FOUND */}
        {/*<Route component={404Page}/>*/}
      </Switch>
    </Router>
  );
};

export default AppRoutes;
