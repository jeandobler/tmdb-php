import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ListMovies from "../scenes/list/ListMovies";
import {CSSTransition, TransitionGroup} from "react-transition-group";

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>

                <TransitionGroup>
                    {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={300}
                    >
                        <Switch>
                            <Route path="/" component={ListMovies} exact/>
                            <Route path="/details" component={ListMovies} exact/>
                            <Route component={Error}/>
                        </Switch>
                    </CSSTransition>

                </TransitionGroup>
            </BrowserRouter>
        );
    }
}

export default Routes;
