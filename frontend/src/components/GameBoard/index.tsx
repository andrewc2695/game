
import React, { useEffect, useMemo } from "react";
import { useGameBoardLogic } from "./logic";
import './style.scss'
import { PieceSelector } from "../PieceSelector";
import { Board } from "./board";

export const GameBoard = () => {

    const { setUpGameBoard,
            board,
            showSelector,
            setShowSelector
        } = useGameBoardLogic();

    useEffect(() => {
        setUpGameBoard('p1');
    }, []);


    return (
        <div>
            <Board />
            {showSelector && 
                <PieceSelector 
                    pieces={board.getAvaliablePieces()} 
                    top={showSelector.top}
                    left={showSelector.left}    
                    setShowSelector={setShowSelector}
                />}
        </div>
    )
}