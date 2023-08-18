import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import './style.scss';
import { createNewGame, getLastPlayedGameAndPlayer, saveGameIdAndPlayer } from "../../utility/game";



export const Splash = () => {
    const navigate = useNavigate();
    // create or join game options
    // im going to need to find a way to delete old games

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/game_boards', {method: 'GET'}).then((res) => res.json()).then((json) => console.log(json))
    }, [])

    const handleCreateNewGame = () => {
        createNewGame().then((res) => {
            if(res.game_board){
                saveGameIdAndPlayer(res.game_board.id, res.game_board.current_player);
                navigate('/game_board');
            }
        });
    }

    const handleJoinGame = () => {
        navigate('/game_board');
    }

    return <div className="Splash">
        <h1>Play Luzhanqi</h1>
        <div className="Splash-ButtonsContainer">
            <button onClick={handleCreateNewGame}>Create New Game</button>
            <button>Join Game</button>
            {getLastPlayedGameAndPlayer().gameId && <button onClick={handleJoinGame}>Join Last Played Game</button>}
        </div>
        <a href="https://en.wikipedia.org/wiki/Luzhanqi" target="_">Luzhanqi Wiki</a>
    </div>
}

// We have user create a username not real but just for keeping track
// then we have 5 rooms or so made
// if they join the room we update the rooms with the users name
// if two people are in a room the game starts