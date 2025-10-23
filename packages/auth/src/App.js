import React from "react";
// Router: allows us to provide the history object that we want to use - doesn't make its own history
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Signin from './components/Signin';
import Signup from './components/Signup';

// adds custom prefix to classes for our microfrontend css to avoid css collitions
const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ( { history } ) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin" component={Signin} />
                    <Route path="/auth/signup" component={Signup} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}