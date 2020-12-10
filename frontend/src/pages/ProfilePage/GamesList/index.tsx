import { Button } from 'primereact/button';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Game} from "../../../../../backend/src/types/Game";

interface GamesListProps {
    games: Array<Game>
}

export const GamesList = (props: GamesListProps): JSX.Element => {
    const history = useHistory();
    const {games} = props;

    return (
        <div className={'p-mr-2 p-flex-column'}>
            {games && games.map(game => {
                return (
                    <div className='p-mr-2 p-p-5' key={`game-${game.id}`}>
                        <Button onClick={() => history.push(`/game/${game.type}/${game.id}`)}>
                            <div style={{width: '500px', height: '100px'}}>
                                <p className={'p-mr-2'}>name: {game.name}</p>
                                <p className={'p-mr-2'}>type: {game.type}</p>
                                <p className={'p-mr-2'}>completed: {game.completed}</p>
                            </div>
                        </Button>
                    </div>
                );
            })}
        </div>
    );


};







