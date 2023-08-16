
import type {piece} from './board'

interface ITile {
    row: number;
    col: number;
    piece: piece;
    safe: boolean;
    candycane: boolean;
    connects: string[];
    player?: 'p1' | 'p2' | undefined;
}

export class Tile {
    row: ITile['row'];
    col: ITile['col'];
    piece: ITile['piece'];
    safe: ITile['safe'];
    candycane: ITile['candycane'];
    connects: ITile['connects'];
    player: ITile['player'];

    constructor(info: ITile) {
        this.row = info.row;
        this.col = info.col;
        this.piece = null;
        this.safe = info.safe;
        this.candycane = info.candycane;
        this.connects = info.connects;
        this.player = info.player;
    }
}

