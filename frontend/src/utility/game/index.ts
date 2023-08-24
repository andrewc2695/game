const initialBoardState = '[[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]]]'


export const createNewGame = ():Promise<{game_board: {board: string, current_player: string, id: string}}> => {
    return fetch('http://localhost:3000/api/v1/game_boards', 
    { 
        headers:{ 'Content-Type': 'application/json' },
        method: 'POST', 
        body: JSON.stringify({game_board: {board: initialBoardState, current_player: 'p1'}})
    }
    ).then((res) => res.json()).then((json) => json);
}

export const getGame = (id: string) => {
    return fetch(`http://localhost:3000/api/v1/game_boards/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
    }).then((res) => res.json()).then((json) => json);
}

export const updateGame = (id: string, gameState: string) => {
    return fetch(`http://localhost:3000/api/v1/game_boards/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({ game_board: { board: gameState, current_player: 'p1'} })
    }
    ).then((res) => res.json()).then((json) => json);
}

export const deleteGame = (id: string) => {
    return fetch(`http://localhost:3000/api/v1/game_boards/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE',
    }
    ).then((res) => res.json()).then((json) => json);
}

export const saveGameIdAndPlayer = (id: string, player: string) => {
    localStorage.setItem('gameId', id);
    localStorage.setItem('player', player);
}

export const removeGameIdAndPlayer = () => {
    localStorage.removeItem('gameId');
    localStorage.removeItem('player');
}

export const getLastPlayedGameAndPlayer = () => {
    return {gameId: localStorage.getItem('gameId'), player: localStorage.getItem('player')}
}