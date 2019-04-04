import React from 'react';
import {HashRouter, Link, Switch, Route, Redirect} from 'react-router-dom';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import ContactIn from './components/contactIn/ContactIn';
import MoFront from './components/MapiOrders/MoFront';
import HomePage from './components/home/HomePage';
import Dashboard from './components/views/Dashboard/';
import EgeriaImportPage from './components/egeriaimport/EgeriaImportPage';
import TriomedImpInvoicesPage from './components/triomed_imp_invoices/TriomedImpInvoicePage';
import LogInPage from './components/LogInPage.js';
import auth from './auth/authenticator';
import {createBrowserHistory} from 'history';
import ReactDOM from 'react-dom';


import { IndexRoute } from 'react-router';
import Full from "./containers/Full/Full";
import Sidebar from './components/Sidebar/Sidebar';

/*

        <Route path="/homepage" component={HomePage}/>
        <Route path="/egeriaimport" component={EgeriaImportPage}/>
        <Route path="/about" component={AboutPage} />

 */

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LogInPage} />
        <Route path="/homepage" component={HomePage}/>
        <Route path="/egeriaimport" component={EgeriaImportPage}/>
        <Route path="/triomed_imp_invoices" component={TriomedImpInvoicesPage}/>
        <Route path="/about" component={AboutPage} />
        <Route path="/contact_in" component={ContactIn} />
        <Route path="/mapi_orders" component={MoFront} />
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