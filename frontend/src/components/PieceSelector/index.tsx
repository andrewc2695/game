import React from "react";
import './style.scss';
import { Board } from "../../classes/board";

interface IPieceSelector {
    top: number;
    left: number;
    id: string;
    setShowSelector: React.Dispatch<React.SetStateAction<{
        top: number;
        left: number;
        id: string;
    } | undefined>>
    board: Board;
}
export const PieceSelector = ({board, top, left, id, setShowSelector}: IPieceSelector) => {
    
    return (
        <div className="BackGround" onClick={() => setShowSelector(undefined)}>
            <div className="PieceSelector" style={{top, left}}>
                {Object.entries(board.getAvaliablePieces()).map(([k, v]) => {
                    const pos = id.split(' ').map((num) => Number(num))
                    const isStartingPieceValid = board.canPieceStartHere(k as 'flag', pos as [number, number]) && v > 0;
                    return <div className={`PieceSelector-Piece ${isStartingPieceValid ? '' : 'PieceSelector-Invalid'}`} key={k}>
                            <div onClick={() => {
                                if(isStartingPieceValid && v > 0) {
                                    board.placePiece(k as 'flag', pos as [number, number], 'p1')
                                }
                            }}>{k}:{v}
                            </div>
                    </div>
                })}
            </div>
        </div>
    )
}