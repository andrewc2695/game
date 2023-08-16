const initialBoardState = '[[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]],[[null,null],[null,null],[null,null],[null,null],[null,null]]]'


export const createNewGame = () => {
    fetch('http://localhost:3000/api/v1/game_boards', 
    { 
        headers:{ 'Content-Type': 'application/json' },
        method: 'POST', 
        body: JSON.stringify({game_board: {board: initialBoardState, current_player: 'p1'}})
    }
    ).then((res) => res.json()).then((json) => json);
}

export const updateGame = (id: number) => {
    fetch('http://localhost:3000/api/v1/game_boards/4', {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({ game_board: { board: initialBoardState, current_player: 'p2'} })
    }
    ).then((res) => res.json()).then((json) => json);
}