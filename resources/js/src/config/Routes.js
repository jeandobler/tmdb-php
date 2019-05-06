import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ListMovies from "../scenes/list/ListMovies";

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route path="/" component={ListMovies} exact/>
                        <Route path="/details" component={ListMovies} exact/>
                        <Route component={Error}/>
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
