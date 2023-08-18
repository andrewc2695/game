import React, { useEffect, useState } from "react"
import {Board} from '../../classes/board'
import { getLastPlayedGameAndPlayer } from "../../utility/game"

export type pieces = {
    "flag": number,
    "mine": number,
    "bomb": number,
    "engineer": number,
    1: number,
    2: number,
    3: number,
    4: number,
    5: number,
    6: number,
    7: number,
    8: number
}

export const useGameBoardLogic = () => {
    const [board, setBoard] = useState(new Board);
    const [boardState, setBoardState] = useState<string>(JSON.stringify(board.getAllPieces()));
    const [showSelector, setShowSelector] = useState<{top: number, left: number, id: string}>();
    const [gameInfo, setGameInfo] = useState<{gameId: string, player: string}>();

    useEffect(() => {
        const {gameId, player } = getLastPlayedGameAndPlayer();
        console.log({gameId, player})
        if(gameId && player){
            setGameInfo({gameId, player});
        }
    }, [])

    const setUpGameBoard = (player: 'p1' | 'p2') => {
        const playerSpots = document.getElementsByClassName(player);
        for(let i = 0; i < playerSpots.length; i++){
            playerSpots[i].addEventListener('click', showSelectorFn)
        }
    }

    const showSelectorFn = (e: Event) => {
        const evt = e as MouseEvent;
        const id = (e.target as HTMLElement).parentElement?.id
        if(id){
            setShowSelector({top: evt.clientY, left: evt.clientX, id: id});
        }
    }


 return {
    setUpGameBoard,
    board,
    boardState,
    showSelector,
    setShowSelector,
    gameInfo,
 }
}