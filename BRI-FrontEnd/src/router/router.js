import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from '../component/Page/Home';
import DB_KB from '../component/Page/DB_KB';


class Routers extends React.Component {
    render() {

        return (
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/DB_KB" component={DB_KB} />
            </Router>

        );
    }
}
export default Routers;