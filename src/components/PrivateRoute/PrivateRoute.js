import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
    
    const {component: Component, ...rest} = props;
    const isAuthorized = localStorage.getItem('otpPass');
        return (
          <Route
            {...rest}
            render={() =>
              isAuthorized ? (
                <Component {...rest}></Component>
              ) : (
                <Redirect to="/"></Redirect>
              )
            }
          ></Route>
        );
}

export default PrivateRoute;