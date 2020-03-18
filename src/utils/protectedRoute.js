import React from 'react';
import {Route,Redirect} from 'react-router-dom'

const ProtetedRoute = ({ component: Component, ...rest }) =>(
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Register" />
        )
      }
    />
  );
  export default ProtetedRoute