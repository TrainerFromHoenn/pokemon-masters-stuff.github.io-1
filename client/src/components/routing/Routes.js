import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Register } from '../RegisterModal';
import { Login } from '../LoginModal';

// import Builds from '../builds/Builds';
// import Build from '../builds/Build';

import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <Fragment>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />

      {/* <PrivateRoute exact path='/posts' component={Builds} />
        <PrivateRoute exact path='/posts/:id' component={Build} /> */}
    </Fragment>
  );
};

export default Routes;
