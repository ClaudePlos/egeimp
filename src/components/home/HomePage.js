import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Container, Button, Row, Col, Jumbotron } from 'reactstrap';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron">
                    <h1>Home Page</h1>
                    <p>the best way manage</p>
                    <Link to="/" className="btn btn-primary btn-lg">log in as a test user</Link>
                    <Button color="danger">Danger!</Button>
                </div>

                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to React</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

            </div>
        );
    }
}

export default HomePage;

/*

<div className="jumbotron">
                            <h1>Home Page</h1>
                            <p>the best way manage</p>
                            <Link to="/" className="btn btn-primary btn-lg">log in as a test user</Link>
                        </div>


















































































              <div>
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb />
                    </main>
                </div>
            </div>

 */