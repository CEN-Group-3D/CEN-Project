import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

require('./App.css')


const App = () => {
  return (
    <div>
      <Header />
      <div id="main-content-panel">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
