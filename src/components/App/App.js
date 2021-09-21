import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../Login/Login';
import Main from '../Main/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import './reset.css';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/main">
            <PrivateRoute component={Main} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
