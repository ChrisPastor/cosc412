import React, {useEffect, useState} from 'react'
import {UserInfo} from './UserInfo';
import UserStats from '../../common/UserStats'
import {observer} from "mobx-react";
import {currentUserStore} from "../../stores";
import {ProgressSpinner} from "primereact/progressspinner";
import {findOrCreateUserWrapper} from "../../common/utils/requests";
import {useAuth0} from "@auth0/auth0-react";
import {PopUp} from "../../common/DataEntryPopUp/Popup";
import { Button } from 'primereact/button';


const ProfilePage = observer((): JSX.Element => {
    const {isAuthenticated, user} = useAuth0();

    const [showPopUp, setShowPopUp] = useState<boolean>(false);

    const showModal = () => {
        setShowPopUp(true);
    };
    
    const hideModal = () => {
        setShowPopUp(false);
    };

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
            <Button className="p-mr-2" label="add weight" onClick={showModal}/>
            <PopUp show={showPopUp} handleClose={hideModal} metric="weight"/>
            {/*the weight metric will come from the game object*/}
        </div>
    );
});

export default ProfilePage;
