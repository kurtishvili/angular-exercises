import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit {

  @Input('color')
  color: string;

  @Input('text')
  text: string;



  @Input('ballSize')
  ballSize: { height, width } = { width: 100, height: 100 }

  constructor() { }



  ngOnInit(): void {
  }



}
