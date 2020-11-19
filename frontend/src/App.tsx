import React, {useEffect, useState} from 'react';
import {Switch, Route} from "react-router-dom";
import MyToolbar from './common/MainToolbar';
import './assets/index.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from './auth/protected-route';
import {httpRequest} from './common/utils/axios';
import {User} from "../../backend/src/types/User";
import Ranking from "~common/Leaderboard/LeaderboardRanking";
import {Game} from "../../backend/src/types/Game";

const Loading = () => (
    <div>Loading...</div>
);

const SomeOtherPage = () => (
    <h2>Some Other Page</h2>
);

const fakeUser: User = {
    bio: "this is a bio",
    email: "someEmail",
    friends: [],
    games: [],
    id: "agsdfkasdkj",
    picture: "",
    userName: "jdsfjdfa"
};

const fakeGame: Game = {
    goal: 25,
    id: "sadkhjfa",
    metric: "weight",
    name: "game1",
    type: 'Solo',
    users: []
};

const Home = () => {
    const [testValue, setTestValue] = useState({});

    //this useEffect will only happen on the first page load as there are no values it is dependent on
    useEffect(() => {
        //we have to wrap our async request in a synchronous method call bc useEffect is synchronous
        async function fetchData() {
            const {data} = await httpRequest({
                method: 'POST',
                endpoint: 'http://localhost:3000/healthy-competition/api/users/',
                data: {
                    data: fakeUser,
                    type: 'find-one'
                }
            });

            console.log(data);

            setTestValue(data);
        }
        void fetchData();
    }, []);

    const dataOutput = (data: { [key: string]: any }) => {
        return Object.keys(data).map((value, index) => {
            return <div key={`key${index}`}>{value}: {data[value]}</div>;
        });
    };

    return (
        <div>
            <h1>HomePage</h1>
            {testValue && dataOutput(testValue)}
        </div>
    );
};

const Login = () => (
    <div>
        <Ranking gameUsers={fakeGame.users} metric={fakeGame.metric} />
    </div>
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
                <Route path= "/user"> 
                    <ProfilePage/>
                </Route>
                <ProtectedRoute path="/some-other-page" component={SomeOtherPage} />
            </Switch>
        </React.Fragment>
    );
};

export default App;
