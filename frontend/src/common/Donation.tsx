import React from "react";
import {Link} from "react-router-dom"
import {Button} from "primereact/button";
const Donation = (): JSX.Element => {
    return (
        <Link to="/donation">
            <Button 
                label="Donation"
                className="p-mr-2"
            />
        </Link>
    );
};

export default Donation;
