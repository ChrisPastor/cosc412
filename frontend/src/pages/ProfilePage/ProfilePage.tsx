import React, {useEffect, useState} from 'react';
import {UserInfo} from './UserInfo';
import {observer} from "mobx-react";
import {currentUserStore} from "../../stores";
import {ProgressSpinner} from "primereact/progressspinner";
import {findOrCreateUserWrapper, getAllGamesWrapper} from "../../common/utils/requests";
import {useAuth0} from "@auth0/auth0-react";
import {PopUp} from "../../common/DataEntryPopUp/Popup";
import { Button } from 'primereact/button';
import {Game} from "../../../../backend/src/types/Game";
import {GamesList} from "./GamesList";

const fakeGames: Array<Game> = [
    {
        id: 'someGameId1',
        name: 'someGameName1',
        type: 'solo-multi',
        metric: 'weight',
        goal: 30,
        users: [
            {
                id: 'someUserId1',
                userName: 'someUserName1',
                values: []
            }
        ],
        completed: false
    },
    {
        id: 'someGameId2',
        name: 'someGameName2',
        type: 'solo',
        metric: 'weight',
        goal: 30,
        users: [
            {
                id: 'someUserId1',
                userName: 'someUserName1',
                values: []
            }
        ],
        completed: false
    },
    {
        id: 'someGameId3',
        name: 'someGameName3',
        type: 'team-multi',
        metric: 'weight',
        goal: 30,
        users: [
            {
                id: 'someUserId1',
                userName: 'someUserName1',
                values: []
            }
        ],
        completed: false
    },
];


const ProfilePage = observer((): JSX.Element => {
    const {isAuthenticated, user} = useAuth0();

    const [showPopUp, setShowPopUp] = useState<boolean>(false);
    const [games, setGames] = useState<Array<Game>>(fakeGames);

    const showModal = () => {
        setShowPopUp(true);
    };
    
    const hideModal = () => {
        setShowPopUp(false);
    };

    //this useEffect will only happen on the first page load as there are no values it is dependent on
    useEffect(() => {
        findOrCreateUserWrapper({isAuthenticated, user});
        //getAllGamesWrapper(setGames);
    }, []);

    if (currentUserStore._isLoading || !games) {
        return <ProgressSpinner />;
    }

    return (
        <div className={'p-d-flex'}>
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
            <GamesList games={games} />
        </div>
    );
});

export default ProfilePage;
