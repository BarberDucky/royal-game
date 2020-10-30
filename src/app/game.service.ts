import { Injectable } from '@angular/core';
import { Game } from './game-logic/game'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { 
    this.game = new Game(2)
  }

  game: Game

  getGame() {
    return of(this.game)
  }
}
