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
                    return <div className="PieceSelector-Piece" key={k}><div onClick={() => {
                        if(v > 0) {
                            const pos = id.split(' ').map((num) => Number(num))
                            board.placePiece(k as 'flag', pos as [number, number], 'p1')
                        }
                    }}>{k}:{v}</div></div>
                })}
            </div>
        </div>
    )
}