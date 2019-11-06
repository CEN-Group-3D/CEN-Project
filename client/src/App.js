import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Welcome from "./views/Welcome/Welcome"
import PaymentPlans from "./views/PaymentPlans/PaymentPlans"
import UserDashboardView from "./views/UserDashboardView/UserDashboardView"
import NotFound from "./views/NotFound"
import AdminDashboardView from "./views/AdminDashboardView/AdminDashboardView"
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
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/payments" component={PaymentPlans} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/admin-dashboard" component={AdminDashboardView} />
          <Route exact path="/dashboard" component={UserDashboardView} />
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
