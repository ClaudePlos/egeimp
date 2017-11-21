import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron">
                    <h1>Home Page</h1>
                    <p>the best way manage</p>
                    <Link to="/" className="btn btn-primary btn-lg">log in as a test user</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;