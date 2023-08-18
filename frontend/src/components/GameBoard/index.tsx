
import React, { useEffect, useMemo } from "react";
import { useGameBoardLogic } from "./logic";
import './style.scss'
import { PieceSelector } from "../PieceSelector";
import { Board } from "./board";
import { deleteGame, updateGame } from "../../utility/game";

export const GameBoard = () => {

    const { setUpGameBoard,
            board,
            showSelector,
            setShowSelector,
            boardState,
            gameInfo,
        } = useGameBoardLogic();

    useEffect(() => {
        if(gameInfo?.player){
            setUpGameBoard(gameInfo.player as 'p1');
        }
        // console.log(JSON.stringify(board.getAllPieces()));
    }, [gameInfo?.player]);

    useEffect(() => {
        
    }, [boardState])


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