import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
//import 'react-s-alert/dist/s-alert-css-effects/slide.css';


class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                {/*<Header />*/}
                {this.props.children}
                <Alert stack={{limit: 3}} />
            </div>
        );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;