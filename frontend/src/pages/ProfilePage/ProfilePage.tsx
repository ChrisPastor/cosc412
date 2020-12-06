import React, {useEffect} from 'react'
import {UserInfo} from './UserInfo';
import UserStats from '../../common/UserStats'
import {observer} from "mobx-react";
import {currentUserStore} from "../../stores";
import {ProgressSpinner} from "primereact/progressspinner";
import {findOrCreateUserWrapper} from "../../common/utils/requests";
import {useAuth0} from "@auth0/auth0-react";


const ProfilePage = observer((): JSX.Element => {
    const {isAuthenticated, user} = useAuth0();

    //this useEffect will only happen on the first page load as there are no values it is dependent on
    useEffect(() => {
        findOrCreateUserWrapper({isAuthenticated, user});
    }, []);

    if (currentUserStore._isLoading) {
        return <ProgressSpinner />;
    }

    return (
        <div>
            <div style={{
                margin: "18px 0px"
            }}>
                <div>
                    <UserInfo user={currentUserStore.user}/>
                </div>
            </div>
        </div>
    );
});

export default ProfilePage;
