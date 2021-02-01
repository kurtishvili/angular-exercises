import { Component, OnInit } from '@angular/core';
import { sharedService } from 'src/app/sharedService/shared.service';
import { ColorfulListItemType } from './enums/colorful-list-item-type.enum';

@Component({
  selector: 'list-item-count',
  templateUrl: './colorful-list-item-count.component.html',
  styleUrls: ['./colorful-list-item-count.component.scss']
})
export class ColorfulListItemCountComponent implements OnInit {

  constructor(private readonly sharedService: sharedService) { }

  listItemCount: number = 0;
  listItemCountColor: string;
  ngOnInit(): void {
    this.sharedService.updateListCount$.subscribe(
      response => {
        if (response.type == ColorfulListItemType.changeColor) {
          this.listItemCountColor = response.data
        }
      })

    this.sharedService.updateListItem$.subscribe(
      _ => {
        const items = JSON.parse(sessionStorage.getItem('colorfulItems'));

        this.listItemCount = items.length;
      }
    )

    const items = JSON.parse(sessionStorage.getItem('colorfulItems'));

    this.listItemCount = items.length;
  }

}
