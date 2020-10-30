import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.stoneNumber)
    this.stones = Array(this.stoneNumber).fill(0)
    console.log(this.stoneColor)
  }

  stones: number[]

  @Input()
  houseTitle: string

  @Input()
  stoneNumber: number

  @Input()
  stoneColor: string

}
