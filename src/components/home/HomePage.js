import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import {Container, Button, Row, Col, Jumbotron } from 'reactstrap';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                <Jumbotron fluid>
                <Container fluid>
                    <div className="jumbotron">
                        <h1>Home Page</h1>
                        <p>Task TODO:</p>
                        <Link to="/" className="btn btn-primary btn-lg">log in</Link>
                        <Button color="danger">Danger!</Button>
                    </div>
                </Container>
                </Jumbotron>

                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h1>Naprzod</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Docs
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                </div>

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