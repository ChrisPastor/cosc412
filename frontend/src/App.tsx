import React from 'react';
import {Switch, Route} from "react-router-dom";
import MyToolbar from './common/MainToolbar';
import './assets/index.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from './auth/protected-route';

const Loading = () => (
    <div>Loading...</div>
);

const SomeOtherPage = () => (
    <h2>Some Other Page</h2>
);

const Home = () => (
    <h1>Home</h1>
);

const Login = () => (
    <h1>Login</h1>
);

const App: React.FunctionComponent = (): JSX.Element => {
    const { isLoading } = useAuth0();

    if(isLoading) {
        return <Loading />;
    }

    return (
        <React.Fragment>
            <MyToolbar />
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/home" >
                    <Home />
                </Route>
                <ProtectedRoute path="/some-other-page" component={SomeOtherPage} />
            </Switch>
        </React.Fragment>
    );
};

export default App;
