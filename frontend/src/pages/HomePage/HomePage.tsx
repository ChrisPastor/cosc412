import {observer} from "mobx-react";
import React, {useEffect} from "react";
import {httpRequest} from "../../common/utils/axios";
import {currentUserStore} from "../../stores";
import { useAuth0 } from "@auth0/auth0-react";
import {User} from "../../../../backend/src/types/User";
import {findOrCreateUserWrapper} from "../../common/utils/requests";

const auth0GoogleUserExampleStructure = {
    given_name:"Christopher",
    family_name:"Pastor",
    nickname:"cpasto1",
    name:"Christopher Pastor",
    picture:"https://lh6.googleusercontent.com/-1HWoXLgPBX0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucncVwuOVGdTLnXsXfX2Y9Dok5YsCQ/s96-c/photo.jpg",
    locale:"en",
    updated_at:"2020-11-25T17:39:26.732Z",
    email:"cpasto1@students.towson.edu",
    email_verified:true,
    sub:"google-oauth2|113149545124399807859"
};

const  auth0EmailUserExampleStructure = {
    "nickname":"legoguy2013",
    "name":"legoguy2013@comcast.net",
    "picture":"https://s.gravatar.com/avatar/f83abefe17da7a48e41216a56654ee9c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fle.png",
    "updated_at":"2020-11-25T17:58:47.853Z",
    "email":"legoguy2013@comcast.net",
    "email_verified":false,
    "sub":"auth0|5fbe9b57a2d7f3006e6e34ff"
};


const HomePage = observer(() => {
    const {isAuthenticated, user} = useAuth0();

    //this useEffect will only happen on the first page load as there are no values it is dependent on
    useEffect(() => {
        findOrCreateUserWrapper({isAuthenticated, user});
    }, []);

    return (
        <div className={"p-m-4 p-flex-column"}>
            <h1>GET FIT TOGETHER</h1>
            <div>
                Welcome to our website used to track health <br/> measures in a fun competitive way!
            </div>
            <div>
                <img alt={"placeholder"}/>
            </div>
            <div className={"p-d-flex"}>
                <div>
                    <div>Solo Game</div>
                    <div>description</div>
                </div>
                <div>
                    <div>Solo Multi</div>
                    <div>description</div>
                </div>
                <div>
                    <div>Team Multi</div>
                    <div>description</div>
                </div>
            </div>
        </div>
    );
});

export default HomePage;
