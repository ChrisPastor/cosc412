import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {currentUserStore} from "../../stores";
import {ProgressSpinner} from "primereact/progressspinner";
import {findOrCreateUserWrapper, getAllGamesWrapper} from "../../common/utils/requests";
import {useAuth0} from "@auth0/auth0-react";
import {PopUp} from "../../common/DataEntryPopUp/Popup";
import {Button} from 'primereact/button';
import {Game} from "../../../../backend/src/types/Game";
import {ProgressGraph} from "../../common/Graph";
import UserStats from "../../common/UserStats";
import {UserInfo} from "../ProfilePage/UserInfo";


const SoloGamePage = observer((): JSX.Element => {
    const {isAuthenticated, user} = useAuth0();

    const [showPopUp, setShowPopUp] = useState<boolean>(false);
    

    const showModal = () => {
        setShowPopUp(true);
    };
    
    const hideModal = () => {
        setShowPopUp(false);
    };

    useEffect(() => {
        findOrCreateUserWrapper({isAuthenticated, user});
        //getAllGamesWrapper(setGames);
    }, []);

    // if (currentUserStore._isLoading) {
    //     return <ProgressSpinner />;
    // }

    return (
        <>
            <div className={'p-flex-column'}>      
                <div>
                    <h1>Solo Play</h1>
                </div>

                <div className="p-m-md-6 p-d-flex" style={{
                    margin: "18px 0px"
                }}>
                    <Button className="p-mr-2" label="add weight" onClick={showModal}/>         
                    {/*the weight metric will come from the game object*/}
                    <ProgressGraph />
                </div>
             
            </div>
            <PopUp show={showPopUp} handleClose={hideModal} metric="weight"/>
        </>
    );
});


export default SoloGamePage;