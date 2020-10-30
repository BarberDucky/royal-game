import { Component, OnInit } from '@angular/core';
import { Game } from '../game-logic/game'
import { GameService } from '../game.service'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor(private gameService : GameService) { }

  game: Game

  ngOnInit(): void {
    this.gameService.getGame()
      .subscribe(game => this.game = game)
    
    console.log(this.game)
  }

}
