import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sharedService } from 'src/app/sharedService/shared.service';

@Component({
  selector: 'app-images-list-item',
  templateUrl: './images-list-item.component.html',
  styleUrls: ['./images-list-item.component.scss']
})
export class ImagesListItemComponent implements OnInit {

  @Input()
  url: string;
  @Input()
  name: string;

  @Output("onDelete")
  onDeleteEmitter: EventEmitter<any> = new EventEmitter;

  constructor(private readonly sharedService: sharedService) { }

  ngOnInit(): void {

  }

  setPrimaryImage() {
    this.sharedService.updatePrimaryUrl.next(this.url)
  }

  removeItem() {
    this.onDeleteEmitter.emit();
  }
}
