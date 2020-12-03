import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
// import { Redirect } from "react-router-dom";

import SignIn from './views/pages/auth/SignIn';
import SignUp from './views/pages/auth/SignUp';
import Home from './views/pages/home/Home';
import Pricing from './views/pages/pricing/Pricing';
import Booking from './views/pages/booking/Booking';
import Checkout from './views/pages/checkout/Checkout';

export default function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/booking" component={Booking} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </Router>
    )
}