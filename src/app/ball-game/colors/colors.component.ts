import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  @Output('ball')
  ball: EventEmitter<any> = new EventEmitter();

  balls: {}[] = [
    { color: "red", text: "red" },
    { color: "green", text: "green" },
    { color: "blue", text: "blue" }
  ]

  constructor() { }

  ngOnInit(): void {

  }

  ballClick(ball) {
    this.ball.emit(ball);
  }



}
