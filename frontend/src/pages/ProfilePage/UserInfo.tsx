import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const UserInfo =() => {
    
    const {user} = useAuth0();
    console.log(user);


    return(
        <div>
            <img style ={{width:"160px", height: "160px", borderRadius: "80px"}} 
            src="userimagelinkgoeshere"
            />
            <h4>First Name Last Name here</h4>
        </div>

    )

}

export {UserInfo};