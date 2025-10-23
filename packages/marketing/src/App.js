import React from "react";
// Router: allows us to provide the history object that we want to use - doesn't make its own history
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from './components/Landing'
import Pricing from './components/Pricing'

// adds custom prefix to classes for our microfrontend css to avoid css collitions
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default ( { history } ) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}