import { Component, OnInit } from '@angular/core';
import { sharedService } from 'src/app/sharedService/shared.service';
import { ColorfulListItemType } from '../colorful-list-item-count/enums/colorful-list-item-type.enum';

@Component({
  selector: 'list',
  templateUrl: './colorful-list.component.html',
  styleUrls: ['./colorful-list.component.scss']
})
export class ColorfulListComponent implements OnInit {

  items: {}[] = []

  constructor(private readonly sharedService: sharedService) { }

  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem('colorfulItems'));

    this.sharedService.updateListItem$.subscribe(
      _ => {
        this.items = JSON.parse(sessionStorage.getItem('colorfulItems'));

        this.sharedService.updateListCount.next(
          { type: ColorfulListItemType.changeCount, data: this.items.length }
        )
      }
    )
  }

  topTransition(i) {
    if (i == 0) {
      var item = this.items.splice(i, 1)
    }
    else {
      var item = this.items.splice(i, 1)
      this.items.splice(i - 1, 0, ...item)
    }

  }

  bottomTransition(i) {
    if (i == this.items.length - 1) {
      var item = this.items.splice(i, 1)
    }
    else {
      var item = this.items.splice(i, 1)
      this.items.splice(i + 1, 0, ...item)
    }

  }





}
