import Board from "./board"

export class Game {

  constructor(_numberOfPlayers: number) {
    this.numberOfPlayers = _numberOfPlayers
    this.currentPlayer = 'white'
    this.isEnd = false
    this.board = new Board()
  }

  numberOfPlayers: number
  currentPlayer: string
  isEnd: boolean
  board: Board

  playMove = (player: number, numberOfPlaces: number, stonePosition: {i: number, j: number} = null) => {
    
    const landedOnStar = this.board.playMove(player, numberOfPlaces, stonePosition)

    if (this.didPlayerWin()) {
      console.log(`Player ${this.currentPlayer} won!`)
      this.isEnd = true
      
    } else {
      //if (landedOnStar) {
        //this.setNextPlayer()
      //}
    }
  }

  setNextPlayer = () => {
    this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers 
    return this.currentPlayer
  }

  didPlayerWin = () : boolean => {
    return this.board.didPlayerWin(this.currentPlayer)
  }


}