import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-size',
  templateUrl: './change-size.component.html',
  styleUrls: ['./change-size.component.scss']
})
export class ChangeSizeComponent implements OnInit {

  @Output('size')
  size: EventEmitter<{}> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  smallClick() {
    this.size.emit({ height: 50, width: 50 })
  }

  mediumClick() {
    this.size.emit({ height: 100, width: 100 })
  }

  largeClick() {
    this.size.emit({ height: 150, width: 150 })
  }

}
