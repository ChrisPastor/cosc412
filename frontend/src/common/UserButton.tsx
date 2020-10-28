import React from "react";
import {Link} from "react-router-dom";
import {Button} from "primereact/button";

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
