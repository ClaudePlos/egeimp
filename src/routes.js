import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import EgeriaImportPage from './components/egeriaimport/EgeriaImportPage';
import LogInPage from './components/LogInPage.js';
import auth from './auth/authenticator';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LogInPage} />
        <Route path="/homepage" component={HomePage}/>
        <Route path="/egeriaimport" component={EgeriaImportPage}/>
        <Route path="/about" component={AboutPage} />
    </Route>
);

function requireAuth(nextState, replace) {
    console.log(auth.loggedIn());
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}