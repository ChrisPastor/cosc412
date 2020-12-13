import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {currentUserStore, gameStore} from "../../stores";
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
    gameStore.game=  {
        id: 'someGameId2',
        name: 'someGameName2',
        type: 'solo',
        metric: 'weight',
        goal: 130,
        users: [
            {
                id: 'someUserId1',
                userName: 'someUserName1',
                values: [
                    {
                        value: 180,
                        date: "Jan 01 2021",
                    }
                ]
            }
        ],
        completed: false
    };

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
            <div className={'p-flex-column p-ai-center'} style={{height: "100%"}}>      
                <div>
                    <h1>Solo Play</h1>
                </div>
                <div className="" style={{width:"700px", height:"15%"}}>
                    <UserStats />
                </div>
                <Button className="m-r-6" label="add weight" onClick={showModal} style={{}}/>   
                <div className="p-m-md-6 p-d-flex" style={{
                    margin: "18px 0px", height:"80%"
                }}>                        
                    {/*the weight metric will come from the game object*/}
                    <div style={{height:"100%", width: "50%", textAlign: "center"}}>
                        <ProgressGraph />
                    </div>
                </div>
             
            </div>
            <PopUp show={showPopUp} handleClose={hideModal} metric="weight"/>
        </>
    );
});

export default SoloGamePage;