import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sharedService } from 'src/app/sharedService/shared.service';

@Component({
  selector: 'list-item',
  templateUrl: './colorful-list-item.component.html',
  styleUrls: ['./colorful-list-item.component.scss']
})
export class ColorfulListItemComponent implements OnInit {

  @Input()
  color: string;
  @Input()
  backgroundColor: string;
  @Input()
  description: string;

  @Input()
  isFirst: boolean;
  @Input()
  isLast: boolean;




  @Output('moveToTop')
  moveToTop: EventEmitter<any> = new EventEmitter();

  @Output('moveToBottom')
  moveToBottom: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  topArrowClick() {
    this.moveToTop.emit()
  }

  bottomArrowClick() {
    this.moveToBottom.emit()
  }

}
