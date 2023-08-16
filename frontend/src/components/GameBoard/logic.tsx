import React, { useState } from "react"
import {Board} from '../../classes/board'

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
    const [showSelector, setShowSelector] = useState<{top: number, left: number}>();


    const setUpGameBoard = (player: 'p1' | 'p2') => {
        const playerSpots = document.getElementsByClassName(player);
        for(let i = 0; i < playerSpots.length; i++){
            playerSpots[i].addEventListener('click', showSelectorFn)
        }
    }

    const showSelectorFn = (e: Event) => {
        const evt = e as PointerEvent
        setShowSelector({top: evt.clientY, left: evt.clientX});
    }


 return {
    setUpGameBoard,
    board,
    showSelector,
    setShowSelector,
 }
}