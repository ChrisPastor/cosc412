import React from 'react';
import {Button} from 'primereact/button';
import {Toolbar} from "primereact/toolbar";
import {Link} from 'react-router-dom';
import AuthenticationButton from "../AuthenticationButton";
import Donation from '../Donation';

const left = () => (
    <React.Fragment>
        <Link to="/login">
            <Button label="Login" className="p-mr-2" />
        </Link>
        <Link to="/home">
            <Button label="Home" className="p-mr-2" />
        </Link>
        <Link to="/some-other-page">
            <Button label="Some Other Page" className="p-button-link" />
        </Link>
        <Donation/>


    </React.Fragment>
);

const right = () => (
    <AuthenticationButton />
);

const MyToolbar: React.FunctionComponent = () => (
    <React.Fragment>
        <Toolbar left={left} right={right} />
    </React.Fragment>
);


export default MyToolbar;
