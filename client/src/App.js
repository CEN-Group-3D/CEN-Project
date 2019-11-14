import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import Welcome from "./views/Welcome/Welcome"
import PaymentPlans from "./views/PaymentPlans/PaymentPlans"
import FormView from "./views/FormView/FormView"
import UserDashboardView from "./views/UserDashboardView/UserDashboardView"
import NotFound from "./views/NotFound"
import AdminDashboardView from "./views/AdminDashboardView/AdminDashboardView"
import Header from "./components/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

require('./App.css')

let isLoggedIn = false;
let handleSuccessfulLogin = () => {
  isLoggedIn = true;
} 

const App = () => {
  return (
    <div>
      <Header dynamicContent={isLoggedIn}/>
      <div id="main-content-panel">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" render={(props) => <Login onSuccessfulLogin={handleSuccessfulLogin} />} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/payments" component={PaymentPlans} />
          <Route exact path="/form" component={FormView} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/admin_dashboard" component={AdminDashboardView} />
          <Route exact path="/dashboard" component={UserDashboardView} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
