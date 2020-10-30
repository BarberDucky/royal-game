import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stone',
  templateUrl: './stone.component.html',
  styleUrls: ['./stone.component.scss']
})
export class StoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  color: string

}
