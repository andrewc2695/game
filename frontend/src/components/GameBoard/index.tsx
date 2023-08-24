
import React, { useEffect, useMemo, useState } from "react";
import { useGameBoardLogic } from "./logic";
import './style.scss'
import { PieceSelector } from "../PieceSelector";
import { Board } from "./board";
import { deleteGame, getGame, updateGame } from "../../utility/game";

export const GameBoard = () => {
    const { setUpGameBoard,
            board,
            showSelector,
            setShowSelector,
            boardState,
            gameInfo,
            ready,
            setReady
        } = useGameBoardLogic();

    useEffect(() => {
        if(gameInfo?.player){
            setUpGameBoard(gameInfo.player as 'p1');
        }
        // console.log(JSON.stringify(board.getAllPieces()));
    }, [gameInfo?.player]);

    useEffect(() => {
        setReady(board.allPiecesPlaced());
    }, [showSelector])

    useEffect(() => {
        if(gameInfo?.gameId){
            getGame(gameInfo.gameId).then((res) => console.log(res));
        }
    }, [gameInfo])


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
                {ready && <div onClick={() => {
                    if(gameInfo){
                        updateGame(gameInfo.gameId, JSON.stringify(board.getAllPieces()));
                    }
                }}>READY!</div>}
        </div>
    )
}