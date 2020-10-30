import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent implements OnInit {

  constructor() { 
    this.dices = [false, false, true, true]
  }

  ngOnInit(): void {
  }

  @Input()
  dices: boolean[]

  @Input()
  isActive: boolean

  rollDice() {
    this.dices = this.dices.map(dice => 1 == Math.floor(Math.random() * 10 % 2))
  }

  getResult() {
    return this.dices.filter(val => val).length
  }
}
