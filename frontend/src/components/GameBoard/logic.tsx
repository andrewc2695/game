import React, { useState } from "react"


const useGameBoardLogic = () => {
    const [avaliablePieces, setAvaliablePieces] = useState({
                                    "flag": 1,
                                    "mine": 3,
                                    "bomb": 2,
                                    "engineer": 3,
                                    1: 3,
                                    2: 3,
                                    3: 2,
                                    4: 2,
                                    5: 2,
                                    6: 2,
                                    7: 1,
                                    8: 1
                                    });


    const setUpGameBoard = (player: 'p1' | 'p2') => {
        const playerPieces = document.getElementsByClassName(player);
        
    }


}