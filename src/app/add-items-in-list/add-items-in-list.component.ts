import { Component, OnInit } from '@angular/core';
import { ListItem } from './list-item';

@Component({
  selector: 'app-add-items-in-list',
  templateUrl: './add-items-in-list.component.html',
  styleUrls: ['./add-items-in-list.component.scss']
})
export class AddItemsInListComponent implements OnInit {

  description1: string;
  description2: string;

  descriptionList1: ListItem[] = [];
  descriptionList2: ListItem[] = [];



  constructor() { }

  ngOnInit(): void {
  }

  addDescriptionFirstList() {
    if (this.description1) {
      this.descriptionList1.push({ description: this.description1, selected: false })
    }

  }

  addDescriptioninSecondList() {
    if (this.description2) {
      this.descriptionList2.push({ description: this.description2, selected: false })
    }

  }

  selectFirstListItem(item: ListItem) {
    for (let desc of this.descriptionList1) {
      desc.selected = false
    }
    item.selected = true;
  }


  selectSecondListItem(item: ListItem) {
    for (let desc2 of this.descriptionList2) {
      desc2.selected = false
    }
    item.selected = true;
  }

  leftArrowClick() {
    for (let selected of this.descriptionList2) {
      if (selected.selected) {
        const index = this.descriptionList2.indexOf(selected);

        this.descriptionList2.splice(index, 1)

        selected.selected = false;
        this.descriptionList1.push(selected)
      }
    }

  }

  rightArrowClick() {
    for (let selected of this.descriptionList1) {
      if (selected.selected) {
        const index = this.descriptionList1.indexOf(selected);

        this.descriptionList1.splice(index, 1)

        selected.selected = false;
        this.descriptionList2.push(selected)
      }
    }
  }



}
