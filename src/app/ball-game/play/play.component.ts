import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  @Input('color')
  color: string;

  @Input('text')
  text: string;

  @Input('ballSize')
  ballSize: {} = { height: 100, width: 100 }

  top: number = 50
  left: number = 50

  constructor() { }

  ngOnInit(): void {
  }

  topTransition() {
    if (this.top < 30) {
      return
    }
    else {
      this.top = this.top - 5
    }

  }

  leftTransition() {
    if (this.left < 20) {
      return
    }
    else {
      this.left -= 5;
    }

  }

  rightTransition() {
    if (this.left > 80) {
      return;
    }
    else {
      this.left += 5;
    }

  }

  bottomTransition() {
    if (this.top > 70) {
      return;
    }
    else {
      this.top += 5
    }

  }





}
