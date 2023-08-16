import React from "react";
import './style.scss';
import { pieces } from "../GameBoard/logic";

interface IPieceSelector {
    top: number;
    left: number;
    setShowSelector: React.Dispatch<React.SetStateAction<{
        top: number;
        left: number;
    } | undefined>>
    pieces: pieces
}
export const PieceSelector = ({pieces, top, left, setShowSelector}: IPieceSelector) => {

    return (
        <div className="BackGround" onClick={() => setShowSelector(undefined)}>
            <div className="PieceSelector" style={{top, left}}>
                {Object.entries(pieces).map(([k, v]) => {
                    return <div className="PieceSelector-Piece" key={k}><div>{k}:{v}</div></div>
                })}
            </div>
        </div>
    )
}