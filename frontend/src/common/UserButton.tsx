import React from "react";
import {BrowserRouter, Link, Switch} from "react-router-dom";
import {Button} from "primereact/button";
import user from "../pages/ProfilePage/ProfilePage";


const UserButton = (): JSX.Element => {
    return (
        <Link to="/user">
            <Button
                label="User"
                className="p-mr-2"
                />
                
        </Link>
        
    );
    
};
 



export default UserButton;
