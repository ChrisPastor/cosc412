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
                id: '"google-oauth2|106012117222739627551"',
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
    // function getUserValues() {
    //     return gameStore.game.users.find(user => {
    //         return user.id === currentUserStore.user.id;
    //     })?.values;
    // }
    // const currentUserValues = getUserValues();

    return (
        <>
            <div className={'p-m-6 p-flex-column p-ai-center'} style={{textAlign: "center"}}>      
                <div>
                    <h1>Solo Play</h1>
                </div>
                <div className="p-mb-4" style={{width:"700px", height:"15%"}}>
                    <UserStats 
                    
                        // goal={gameStore.game.goal}  
                        // starting={currentUserValues ? currentUserValues[0].value : 0} 
                        // current={currentUserValues ? currentUserValues[currentUserValues.length - 1].value : 0}
                        goal = {12} 
                        starting = {100}
                        current = {90}

                    />
                </div>
             <div style ={{textAlign: "right", paddingRight: "400px",}}>
                    
                    <Button className="m-r-6" label="add weight" onClick={showModal} style={{}}/>   
                    
                    </div>              
                    {/*the weight metric will come from the game object*/}
                    <div style={{height:"100%", width: "50%", textAlign: "center"}}>
                        <ProgressGraph />
                    </div>
                
             
            </div>
            <PopUp show={showPopUp} handleClose={hideModal} metric="weight"/>
        </>
    );
});

export default SoloGamePage;

