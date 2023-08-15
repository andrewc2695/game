
import { Tile } from "./tile";
declare type piece = "flag" | "mine" | "bomb" | "engineer" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
class Board {
    board: (Tile | null)[][];
    pieces: Record< piece, number>;
    startTile: string | undefined;
    constructor() {
        this.board = [
            [new Tile({ row: 0, col: 0, piece: null, safe: false, candycane: false, player: undefined, connects: ['0, 1', '1, 0'] }),
            new Tile({ row: 0, col: 1, piece: null, safe: false, candycane: false, connects: ['0, 0', '0, 2', '1, 1'] }),
            new Tile({ row: 0, col: 2, piece: null, safe: false, candycane: false, connects: ['0, 1', '0, 3', '1, 2'] }),
            new Tile({ row: 0, col: 3, piece: null, safe: false, candycane: false, connects: ['0, 2', '0, 4', '1, 3'] }),
            new Tile({ row: 0, col: 4, piece: null, safe: false, candycane: false, connects: ['0, 3', '1, 4'] })
            ],
            [new Tile({ row: 1, col: 0, piece: null, safe: false, candycane: true, connects: ['1, 1', '0, 0', '2, 0', '2, 1'] }),
            new Tile({ row: 1, col: 1, piece: null, safe: false, candycane: true, connects: ['1, 0', '1, 2', '0, 1', '2, 1'] }),
            new Tile({ row: 1, col: 2, piece: null, safe: false, candycane: true, connects: ['1, 1', '1, 3', '0, 2', '2, 2', '2, 1', '2, 3'] }),
            new Tile({ row: 1, col: 3, piece: null, safe: false, candycane: true, connects: ['1, 2', '1, 4', '0, 3', '2, 3'] }),
            new Tile({ row: 1, col: 4, piece: null, safe: false, candycane: true, connects: ['1, 3', '0, 4', '2, 4', '2, 3'] })
            ],
            [new Tile({ row: 2, col: 0, piece: null, safe: false, candycane: true, connects: ['2, 1', '1, 0', '3, 0'] }),
            new Tile({ row: 2, col: 1, piece: null, safe: true, candycane: false, connects: ['2, 0', '2, 2', '1, 1', '3, 1', '1, 0', '1, 2', '3, 0', '3, 2'] }),
            new Tile({ row: 2, col: 2, piece: null, safe: false, candycane: false, connects: ['2, 1', '2, 3', '1, 2', '3, 2'] }),
            new Tile({ row: 2, col: 3, piece: null, safe: true, candycane: false, connects: ['2, 2', '2, 4', '1, 3', '3, 3', '1, 2', '1, 4', '3, 2', '3, 4'] }),
            new Tile({ row: 2, col: 4, piece: null, safe: false, candycane: true, connects: ['2, 3', '1, 4', '3, 4'] }),
            ],
            [new Tile({ row: 3, col: 0, piece: null, safe: false, candycane: true, connects: ['3, 1', '2, 0', '4, 0', '2, 1', '4, 1'] }),
            new Tile({ row: 3, col: 1, piece: null, safe: false, candycane: false, connects: ['3, 0', '3, 2', '2, 1', '4, 1'] }),
            new Tile({ row: 3, col: 2, piece: null, safe: true, candycane: false, connects: ['3, 1', '3, 3', '2, 2', '4, 2', '2, 1', '2, 3', '4, 1', '4, 3'] }),
            new Tile({ row: 3, col: 3, piece: null, safe: false, candycane: false, connects: ['3, 2', '3, 4', '2, 3', '4, 3'] }),
            new Tile({ row: 3, col: 4, piece: null, safe: false, candycane: true, connects: ['3, 3', '2, 4', '4, 4', '2, 3', '4, 3'] }),
            ],
            [new Tile({ row: 4, col: 0, piece: null, safe: false, candycane: true, connects: ['4, 1', '3, 0', '5, 0'] }),
            new Tile({ row: 4, col: 1, piece: null, safe: true, candycane: false, connects: ['4, 0', '4, 2', '3, 1', '5, 1', '3, 0', '3, 2', '5, 0', '5, 2'] }),
            new Tile({ row: 4, col: 2, piece: null, safe: false, candycane: false, connects: ['4, 1', '4, 3', '3, 2', '5, 2'] }),
            new Tile({ row: 4, col: 3, piece: null, safe: true, candycane: false, connects: ['4, 2', '4, 4', '3, 3', '5, 3', '3, 2', '3, 4', '5, 2', '5, 4'] }),
            new Tile({ row: 4, col: 4, piece: null, safe: false, candycane: true, connects: ['4, 3', '3, 4', '5, 4'] }),
            ],
            [new Tile({ row: 5, col: 0, piece: null, safe: false, candycane: true, connects: ['5, 1', '4, 0', '6, 0', '4, 1'] }),
            new Tile({ row: 5, col: 1, piece: null, safe: false, candycane: true, connects: ['5, 0', '5, 2', '4, 1'] }),
            new Tile({ row: 5, col: 2, piece: null, safe: false, candycane: true, connects: ['5, 1', '5, 3', '4, 2', '6, 2', '4, 1', '4, 3'] }),
            new Tile({ row: 5, col: 3, piece: null, safe: false, candycane: true, connects: ['5, 2', '5, 4', '4, 3'] }),
            new Tile({ row: 5, col: 4, piece: null, safe: false, candycane: true, connects: ['5, 3', '4, 4', '6, 4', '4, 3'] })
            ],
            [new Tile({ row: 6, col: 0, piece: null, safe: false, candycane: true, connects: ['6, 2', '5, 0', '7, 0'] }),
                null,
            new Tile({ row: 6, col: 2, piece: null, safe: false, candycane: true, connects: ['6, 0', '6, 4', '5, 2', '7, 2'] }),
                null,
            new Tile({ row: 6, col: 4, piece: null, safe: false, candycane: true, connects: ['6, 2', '5, 4', '7, 4'] })
            ],
            [new Tile({ row: 7, col: 0, piece: null, safe: false, candycane: true, connects: ['7, 2', '6, 0', '8, 0'] }),
                null,
            new Tile({ row: 7, col: 2, piece: null, safe: false, candycane: true, connects: ['7, 0', '7, 4', '6, 2', '8, 2'] }),
                null,
            new Tile({ row: 7, col: 4, piece: null, safe: false, candycane: true, connects: ['7, 2', '6, 4', '8, 4'] })
            ],
            [new Tile({ row: 8, col: 0, piece: null, safe: false, candycane: true, connects: ['8, 2', '7, 0', '9, 0'] }),
                null,
            new Tile({ row: 8, col: 2, piece: null, safe: false, candycane: true, connects: ['8, 0', '8, 4', '7, 2', '9, 2'] }),
                null,
            new Tile({ row: 8, col: 4, piece: null, safe: false, candycane: true, connects: ['8, 2', '7, 4', '9, 4'] })
            ],
            [new Tile({ row: 9, col: 0, piece: null, safe: false, candycane: true, connects: ['9, 1', '10, 0', '8, 0', '10, 1'] }),
            new Tile({ row: 9, col: 1, piece: null, safe: false, candycane: true, connects: ['9, 0', '9, 2', '10, 1'] }),
            new Tile({ row: 9, col: 2, piece: null, safe: false, candycane: true, connects: ['9, 1', '9, 3', '8, 2', '10, 2', '10, 1', '10, 3'] }),
            new Tile({ row: 9, col: 3, piece: null, safe: false, candycane: true, connects: ['9, 2', '9, 4', '10, 3'] }),
            new Tile({ row: 9, col: 4, piece: null, safe: false, candycane: true, connects: ['9, 3', '8, 4', '10, 4', '10, 3'] })
            ],
            [new Tile({ row: 10, col: 0, piece: null, safe: false, candycane: true, connects: ['10, 1', '9, 0', '11, 0'] }),
            new Tile({ row: 10, col: 1, piece: null, safe: true, candycane: false, connects: ['10, 0', '10, 2', '9, 1', '11, 1', '9, 0', '9, 2', '11, 0', '11, 2'] }),
            new Tile({ row: 10, col: 2, piece: null, safe: false, candycane: false, connects: ['10, 1', '10, 3', '9, 2', '11, 2'] }),
            new Tile({ row: 10, col: 3, piece: null, safe: true, candycane: false, connects: ['10, 2', '10, 4', '9, 3', '11, 3', '9, 2', '9, 4', '11, 2', '11, 4'] }),
            new Tile({ row: 2, col: 4, piece: null, safe: false, candycane: true, connects: ['10, 3', '9, 4', '11, 4'] }),
            ],
            [new Tile({ row: 11, col: 0, piece: null, safe: false, candycane: true, connects: ['11, 1', '10, 0', '12, 0', '10, 1', '12, 1'] }),
            new Tile({ row: 11, col: 1, piece: null, safe: false, candycane: false, connects: ['11, 0', '11, 2', '10, 1', '12, 1'] }),
            new Tile({ row: 11, col: 2, piece: null, safe: true, candycane: false, connects: ['11, 1', '11, 3', '10, 2', '12, 2', '10, 1', '10, 3', '12, 1', '12, 3'] }),
            new Tile({ row: 11, col: 3, piece: null, safe: false, candycane: false, connects: ['11, 2', '11, 4', '10, 3', '12, 3'] }),
            new Tile({ row: 11, col: 4, piece: null, safe: false, candycane: true, connects: ['11, 3', '10, 4', '12, 4', '10, 3', '12, 3'] }),
            ],
            [new Tile({ row: 12, col: 0, piece: null, safe: false, candycane: true, connects: ['12, 1', '11, 0', '13, 0'] }),
            new Tile({ row: 12, col: 1, piece: null, safe: true, candycane: false, connects: ['12, 0', '12, 2', '11, 1', '13, 1', '11, 0', '11, 2', '13, 0', '13, 2'] }),
            new Tile({ row: 12, col: 2, piece: null, safe: false, candycane: false, connects: ['12, 1', '12, 3', '11, 2', '13, 2'] }),
            new Tile({ row: 12, col: 3, piece: null, safe: true, candycane: false, connects: ['12, 2', '12, 4', '11, 3', '13, 3', '11, 2', '11, 4', '13, 2', '13, 4'] }),
            new Tile({ row: 12, col: 4, piece: null, safe: false, candycane: true, connects: ['12, 3', '11, 4', '13, 4'] }),
            ],
            [new Tile({ row: 13, col: 0, piece: null, safe: false, candycane: true, connects: ['13, 1', '12, 0', '14, 0', '12, 1'] }),
            new Tile({ row: 13, col: 1, piece: null, safe: false, candycane: false, connects: ['13, 0', '13, 2', '12, 1', '14, 1'] }),
            new Tile({ row: 13, col: 2, piece: null, safe: false, candycane: false, connects: ['13, 1', '13, 3', '12, 2', '12, 1', '12, 3', '14, 2'] }),
            new Tile({ row: 13, col: 3, piece: null, safe: false, candycane: false, connects: ['13, 2', '13, 4', '12, 3', '14, 3'] }),
            new Tile({ row: 13, col: 4, piece: null, safe: false, candycane: true, connects: ['13, 3', '12, 4', '14, 4', '12, 3'] })
            ],
            [new Tile({ row: 14, col: 0, piece: null, safe: false, candycane: false, connects: ['14, 1', '13, 0'] }),
            new Tile({ row: 14, col: 1, piece: null, safe: false, candycane: false, connects: ['14, 0', '14, 2', '13, 1'] }),
            new Tile({ row: 14, col: 2, piece: null, safe: false, candycane: false, connects: ['14, 1', '14, 3', '13, 2'] }),
            new Tile({ row: 14, col: 3, piece: null, safe: false, candycane: false, connects: ['14, 2', '14, 4', '13, 3'] }),
            new Tile({ row: 14, col: 4, piece: null, safe: false, candycane: false, connects: ['14, 3', '13, 4'] })
            ],
        ];
        this.pieces = {
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
        };
        // this.posObj = {};
        // this.ready = false;
        // this.player;
        // this.highlightedTiles = [];
        // this.startTile;
        // this.movePiece = this.movePiece.bind(this);
    }

    // closeWindow = (that, pieceList) => {
    //     let tile = document.getElementById(that);
    //     tile.removeChild(pieceList);
    // }

    // selectPiece = (e) => {
    //     if (e.target.classList[0] === "pieceValue") {
    //         let remainingPieces = Object.keys(this.pieces)
    //         let pieceList = document.createElement("ul");
    //         pieceList.setAttribute('class', 'piece-list');
    //         remainingPieces.forEach(piece => {
    //             if (piece !== "null") {
    //                 let li = document.createElement("li");
    //                 li.setAttribute('class', 'piece-value');
    //                 li.innerHTML = piece;
    //                 pieceList.appendChild(li);
    //                 li.addEventListener("click", () => this.placePiece(e, piece));
    //             }
    //         });
    //         if (e.target.innerHTML !== "") {
    //             let li = document.createElement("li");
    //             li.setAttribute('class', 'piece-value');
    //             li.innerHTML = "Remove";
    //             pieceList.appendChild(li);
    //             li.addEventListener("click", () => this.placePiece(e, null));
    //         }
    //         e.currentTarget.appendChild(pieceList);
    //         let that = e.currentTarget.id;
    //         setTimeout(() => {
    //             document.addEventListener("click", () => this.closeWindow(that, pieceList), { once: true });
    //         }, 10, that, pieceList);
    //     }
    // }

    // validPlacement(pos, piece) {
    //     if (piece === "flag") {
    //         if (pos[0] !== "0" && pos[0] !== "0") {
    //             window.alert("Flag can only be placed in tiles with Blue border")
    //             return false
    //         } else if (pos[1] !== "1" && pos[1] !== "3") {
    //             window.alert("Flag can only be placed in tiles with Blue border")
    //             return false
    //         }
    //     } else if (piece === "mine") {
    //         if (pos[0] === "0" || pos[0] === "14") {
    //             if (pos[1] === "1" || pos[1] === "3") {
    //                 window.alert("Mines can not go in flag spots")
    //                 return false;
    //             }
    //         } else if (pos[0] === "0" || pos[0] === "1") {
    //             return true
    //         } else if (pos[0] === "14" || pos[0] === "13") {
    //             return true
    //         } else {
    //             window.alert("mines can only be in the bottom two rows of your half")
    //             return false;
    //         }
    //     } else if (piece === "bomb") {
    //         if (pos[0] === "5" || pos[0] === "9") {
    //             window.alert("Bombs can not be placed in this row");
    //             return false;
    //         }
    //     }
    //     return true
    // }

    // placePiece = (e, piece) => {
    //     let pos
    //     let target;
    //     if (e.target.className === "pieceValue") {
    //         pos = e.target.parentNode.id.split(" ");
    //         target = e.target.parentNode;
    //     }
    //     if (this.validPlacement(pos, piece)) {
    //         this.posObj[pos.join(" ")] = piece;
    //         this.board[parseInt(pos[0])][parseInt(pos[1])].piece = piece;
    //         this.board[parseInt(pos[0])][parseInt(pos[1])].player = this.player;
    //         for (let i = 0; i < target.children.length; i++) {
    //             if (target.children[i].className === "pieceValue") {
    //                 if (target.children[i].innerHTML !== "") {
    //                     if (this.pieces[target.children[i].innerHTML] === undefined) {
    //                         this.pieces[target.children[i].innerHTML] = 1;
    //                     } else {
    //                         this.pieces[target.children[i].innerHTML]++;
    //                     }
    //                     if (piece === "Remove") {
    //                         target.children[i].innerHTML = "";
    //                         target.children[i].style.backgroundColor = "white";
    //                     } else {
    //                         target.children[i].innerHTML = piece;
    //                     }
    //                 } else {
    //                     target.children[i].innerHTML = piece;
    //                     target.children[i].style.backgroundColor = this.player;
    //                     break
    //                 }
    //             }
    //         }
    //         this.pieces[piece]--
    //         if (this.pieces[piece] === 0) {
    //             delete this.pieces[piece];
    //         }
    //     }

    //     if (Object.keys(this.posObj).length === 1) {
    //         console.log("hi");
    //         let start = document.getElementById("start")
    //         start.style.display = "block";
    //         start.addEventListener("click", () => {
    //             this.ready = true;
    //             console.log(this.ready);
    //             let player = (this.player === "green" ? "p1" : "p2");
    //             let myTiles = document.getElementsByClassName(player);
    //             for (let i = 0; i < myTiles.length; i++) {
    //                 myTiles[i].removeEventListener("click", this.selectPiece)
    //                 myTiles[i].addEventListener("click", this.getValidMoves)
    //             }
    //             start.style.display = "none";
    //         }, { once: true });
    //     } else {
    //         document.getElementById("start").style.display = "none"
    //     }
    // }

    // setUpBoard = (player) => {
    //     let myTiles = document.getElementsByClassName(player);
    //     this.player = (player === "p1" ? "green" : "yellow");
    //     console.log(this.player);
    //     for (let i = 0; i < myTiles.length; i++) {
    //         myTiles[i].addEventListener("click", this.selectPiece)
    //     }
    //     let btn = document.getElementById("start");
    // }


    // getValidMoves = (e) => {
    //     let start = e.currentTarget.id.split(" ")
    //     start[0] = parseInt(start[0]);
    //     start[1] = parseInt(start[1]);
    //     let startTile = this.board[start[0]][start[1]];
    //     this.start = startTile;
    //     let moves = [];
    //     moves = moves.concat(startTile.connects);
    //     if (startTile.candycane === true) {
    //         let i = 0;
    //         while (i < moves.length) {
    //             let posArray = moves[i].split(",")
    //             let posMoves = this.board[parseInt(posArray[0])][parseInt(posArray[1])].connects
    //             posMoves.forEach(posMove => {
    //                 let moveArr = posMove.split(",");
    //                 let newTile = this.board[parseInt(moveArr[0])][parseInt(moveArr[1])];
    //                 if (newTile.candycane) {
    //                     if (newTile.row === startTile.row || newTile.col === startTile.col) {
    //                         if (!moves.includes(posMove)) {
    //                             moves.push(posMove)
    //                         }
    //                     }
    //                 }
    //             });
    //             i++;
    //         }
    //     }
    //     moves.forEach(move => {
    //         move = move.split(",").join("");
    //         this.highlightedTiles.push(move)
    //         let validMove = document.getElementById(String(move));
    //         validMove.addEventListener("click", this.movePiece, true);
    //         validMove.style.boxShadow = "0px 0px 10px 5px yellow";
    //     });
    // }

    // movePiece(e) {
    //     // debugger
    //     let end = e.currentTarget.id.split(" ")
    //     let target = e.currentTarget;
    //     end[0] = parseInt(end[0]);
    //     end[1] = parseInt(end[1]);
    //     let start = [this.start.row, this.start.col]
    //     start = start.join(" ");
    //     let startTile = document.getElementById(start);
    //     for (let i = 0; i < startTile.children.length; i++) {
    //         if (startTile.children[i].className === "pieceValue") {
    //             startTile.children[i].innerHTML = "";
    //             startTile.children[i].style.backgroundColor = "white"
    //         }
    //     }
    //     let endTile = this.board[end[0]][end[1]];
    //     endTile.piece = this.start.piece;
    //     endTile.player = this.start.player;
    //     this.start.piece = null;
    //     this.start.player = null
    //     for (let i = 0; i < target.children.length; i++) {
    //         if (target.children[i].className === "pieceValue") {
    //             target.children[i].innerHTML = endTile.piece;
    //             target.children[i].style.backgroundColor = this.player;
    //         }
    //     }
    //     while (this.highlightedTiles.length) {
    //         let validMove = document.getElementById(String(this.highlightedTiles[0]));
    //         validMove.style.boxShadow = "";
    //         validMove.removeEventListener("click", this.movePiece, true);
    //         this.highlightedTiles.shift();
    //     }
    // }

    // placeOpponentsPieces(pos) {
    //     let opPos = Object.keys(pos);
    //     let opPieces = Object.values(pos);
    //     for (let z = 0; z < opPos.length; z++) {
    //         let opTile = opPos[z].split(" ");
    //         this.board[parseInt(opTile[0])][parseInt(opTile[1])].piece = opPieces[z];
    //     }
    //     let opPlayer = (this.player === "green" ? "p2" : "p1");
    //     let opColor = (this.player === "green" ? "yellow" : "green");
    //     let opTiles = document.getElementsByClassName(opPlayer);
    //     for (let i = 0; i < opTiles.length; i++) {
    //         for (let j = 0; j < opTiles[i].children.length; j++) {
    //             if (opTiles[i].children[j].className === "pieceValue") {
    //                 opTiles[i].children[j].style.backgroundColor = opColor;
    //             }
    //         }
    //     }
    // }

}

module.exports = Board;