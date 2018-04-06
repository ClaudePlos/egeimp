import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Aside from "../../components/Aside/Aside";
import Footer from "../../components/Footer/Footer";
import Egeria from "../../components/views/Egeria/Egeria";
import Dashboard from "../../components/views/Dashboard/Dashboard";
// import Header from '../../components/Header/';
// import Sidebar from '../../components/Sidebar/';
// import Breadcrumb from '../../components/Breadcrumb/';
// import Aside from '../../components/Aside/';
// import Footer from '../../components/Footer/';
//



class Full extends Component {
  render() {
    return (
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar {...this.props}/>
            <main className="main">
              <Breadcrumb />
              <Container fluid>
                <Switch>
                  <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                  <Route path="/egeria" name="Egeria1" component={Egeria}/>
                  <Redirect from="/" to="/dashboard"/>
                </Switch>
              </Container>
            </main>
            <Aside />
          </div>
          <Footer />
        </div>
    );
  }
}

export default Full;
