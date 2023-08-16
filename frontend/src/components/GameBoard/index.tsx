
import React, { useEffect, useMemo } from "react";
import { useGameBoardLogic } from "./logic";
import './style.scss'
import { PieceSelector } from "../PieceSelector";
import { Board } from "./board";
import { updateGame } from "../../utility/game";

export const GameBoard = () => {

    const { setUpGameBoard,
            board,
            showSelector,
            setShowSelector,
            boardState,
        } = useGameBoardLogic();

    useEffect(() => {
        setUpGameBoard('p1');
        console.log(JSON.stringify(board.getAllPieces()));
    }, []);

    useEffect(() => {
        updateGame(4);
    }, [])


    return (
        <div>
            <Board />
            {showSelector && 
                <PieceSelector 
                    board={board}
                    top={showSelector.top}
                    left={showSelector.left}    
                    setShowSelector={setShowSelector}
                    id={showSelector.id}
                />}
        </div>
    )
}