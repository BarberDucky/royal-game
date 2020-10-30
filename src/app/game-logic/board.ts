import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler'

const e = 'e' // empty
const t = 't' // tile
const s = 's' // star
const f = 'f' // final



export type TileType = 'e' | 't' | 's' | 'f'
export type PlayerColor = 'white' | 'black'

export {e, t, s}

export class Tile {

  constructor(type: TileType) {
    this.type = type
    this.player = null
    this.getEdge = (player: Player) => {return null}
  }

  type: TileType
  player: PlayerColor | null
  getEdge: Function
}

export class Player { 
  
  constructor(color: PlayerColor, startingPosition: Tile, idleStones: number) {
    this.color = color
    this.startingPosition = startingPosition
    this.score = 0
    this.idleStones = idleStones
  }

  color: PlayerColor
  startingPosition: Tile
  score: number
  idleStones: number
}

export default class Board {

  constructor() {
    this.board = this.symbolsToBoard(this.symbolsMatrix)

    const finalTile = new Tile(f)
    finalTile.getEdge = (player: Player) => {return finalTile}

    this.board[0][0].getEdge = (player: Player) => {return this.board[1][0]}
    this.board[0][1].getEdge = (player: Player) => {return this.board[0][0]}
    this.board[0][2].getEdge = (player: Player) => {return this.board[0][1]}
    this.board[0][3].getEdge = (player: Player) => {return this.board[0][2]}
    this.board[0][7].getEdge = (player: Player) => {return finalTile}
    this.board[0][8].getEdge = (player: Player) => {return this.board[0][7]}
    this.board[0][9].getEdge = (player: Player) => {return this.board[0][8]}

    this.board[1][0].getEdge = (player: Player) => {return this.board[1][1]}
    this.board[1][1].getEdge = (player: Player) => {return this.board[1][2]}
    this.board[1][2].getEdge = (player: Player) => {return this.board[1][3]}
    this.board[1][3].getEdge = (player: Player) => {return this.board[1][4]}
    this.board[1][4].getEdge = (player: Player) => {return this.board[1][5]}
    this.board[1][5].getEdge = (player: Player) => {return this.board[1][6]}
    this.board[1][6].getEdge = (player: Player) => {return this.board[1][7]}
    this.board[1][7].getEdge = (player: Player) => {return this.board[1][8]}
    this.board[1][8].getEdge = (player: Player) => {return this.board[1][9]}
    this.board[1][9].getEdge = (player: Player) => {return player.color == 'white' ? this.board[0][9] : this.board[2][9]}

    this.board[2][0].getEdge = (player: Player) => {return this.board[1][0]}
    this.board[2][1].getEdge = (player: Player) => {return this.board[2][0]}
    this.board[2][2].getEdge = (player: Player) => {return this.board[2][1]}
    this.board[2][3].getEdge = (player: Player) => {return this.board[2][2]}
    this.board[2][7].getEdge = (player: Player) => {return finalTile}
    this.board[2][8].getEdge = (player: Player) => {return this.board[2][7]}
    this.board[2][9].getEdge = (player: Player) => {return this.board[2][8]}


    this.players.push(new Player('white', this.board[0][3], this.numberOfStones))
    this.players.push(new Player('black', this.board[2][3], this.numberOfStones))
  }

  numberOfPlayers = 2
  numberOfStones = 7
  players: Player[]
  board: Tile[][]

  symbolsMatrix: TileType[][] = [
    [t, t, t, t, e, e, e, t, t, t],
    [s, t, t, s, t, t, t, t, t, s],
    [t, t, t, t, e, e, e, t, t, t],
  ]

  /**
   * Plays move and returns `true` if the player landed on a star.
   */
  playMove = (player: Player, numberOfPlaces: number, currentTile: Tile) => {
    if (!this.isValidMove(player, numberOfPlaces, currentTile)) {
      return false
    }

    let newTile = currentTile

    for (let i = 0; i < numberOfPlaces; i++) {
      newTile = newTile.getEdge()
    }

    if (newTile.type == 'f') {
      currentTile.player = null
      player.score++
    }

    if (currentTile.player != player.color) {
      const opponentPlayer = this.players.find((value) => value.color == currentTile.player)
      
      currentTile.player = player.color
    }

  }

  isValidMove = (player: Player, numberOfPlaces: number, currentTile: Tile) => {
    if (currentTile.player != player.color) return false;

    let lastTile = currentTile

    for (let i = 0; i < numberOfPlaces; i++) {
      lastTile = lastTile.getEdge()
    }

    if (lastTile.type == 'e') return false

    if (lastTile.type == 'f') return true

    if (lastTile.player == player.color) return false

    if (lastTile.player != player.color || lastTile.player == null) return true
  }

  didPlayerWin = (player: Player) => {
    return player.score == this.numberOfStones
  }

  symbolsToBoard = (symbolsMatrix: TileType[][]) => {
    let board: Tile[][] = []

    for (let i = 0; i < symbolsMatrix.length; i++) {
      const boardRow = symbolsMatrix[i].map(tileType => new Tile(tileType))
      board.push(boardRow)
    }

    return board
  }
}