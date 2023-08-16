import React, { useEffect, useState } from "react";
import './style.scss';
import { createNewGame } from "../../utility/game";



export const Splash = () => {
    // create or join game options
    // im going to need to find a way to delete old games

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/game_boards', {method: 'GET'}).then((res) => res.json()).then((json) => console.log(json))
    }, [])

    const handleCreateNewGame = () => {
        createNewGame();
    }

    return <div className="Splash">
        <h1>Play Luzhanqi</h1>
        <div className="Splash-ButtonsContainer">
            <button onClick={createNewGame}>Create New Game</button>
            <button>Join Game</button>
        </div>
        <a href="https://en.wikipedia.org/wiki/Luzhanqi" target="_">Luzhanqi Wiki</a>
    </div>
}

// We have user create a username not real but just for keeping track
// then we have 5 rooms or so made
// if they join the room we update the rooms with the users name
// if two people are in a room the game starts