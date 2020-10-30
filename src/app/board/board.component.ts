import { Component, OnInit, Input } from '@angular/core';
import Board from '../game-logic/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  board: Board

}
