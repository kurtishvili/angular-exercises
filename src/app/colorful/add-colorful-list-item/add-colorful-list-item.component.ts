import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { sharedService } from 'src/app/sharedService/shared.service';
import { ColorfulListItemType } from '../colorful-list-item-count/enums/colorful-list-item-type.enum';

@Component({
  selector: 'add',
  templateUrl: './add-colorful-list-item.component.html',
  styleUrls: ['./add-colorful-list-item.component.scss']
})
export class AddColorfulListItemComponent implements OnInit {

  selectedColor: string = "Select"
  selectedBackgroundColor: string = "Select"
  description: string;

  colors: string[] = ['red', 'green', 'blue']

  constructor(private readonly sharedService: sharedService) { }

  ngOnInit(): void {
  }

  addDescription() {
    const items: {}[] = JSON.parse(sessionStorage.getItem('colorfulItems')) || [];


    items.push({
      color: this.selectedColor,
      backgroundColor: this.selectedBackgroundColor,
      description: this.description
    });


    sessionStorage.setItem('colorfulItems', JSON.stringify(items));

    this.sharedService.updateListItem.next();

    this.sharedService.updateListCount.next(
      { type: ColorfulListItemType.changeColor, data: this.selectedBackgroundColor }
    )

    this.description = ''
    this.selectedColor = 'Select'
    this.selectedBackgroundColor = 'Select'
  }
}
