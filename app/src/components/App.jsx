import React from "react";
import Login from "../containers/login";
import Register from "../containers/register";
import DashBoard from "../containers/dashboard";
// import Main from '../page/main'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Play from "../containers/play";
import PrivateRoute from "./private-route";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route
                    render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.pathname}
                                classNames="fade"
                                timeout={600}
                            >
                                <Switch location={location}>
                                    <PrivateRoute
                                        exact
                                        path="/"
                                        component={DashBoard}
                                    />
                                    <PrivateRoute
                                        path="/play"
                                        component={Play}
                                    />
                                    <Route path="/login" component={Login} />
                                    <Route
                                        path="/register"
                                        component={Register}
                                    />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}
                />
            </Router>
        );
    }
}

export default App;
