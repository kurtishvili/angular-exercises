import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-ball-game',
  templateUrl: './ball-game.component.html',
  styleUrls: ['./ball-game.component.scss']
})
export class BallGameComponent implements OnInit {

  currentBall: any = {};
  ballSize: {} = { width: 100, height: 100 };


  constructor() { }



  ngOnInit(): void {
  }

  getBall(ball: any) {
    this.currentBall = ball;
  }

  getSize(size) {
    this.ballSize = size
  }


}
