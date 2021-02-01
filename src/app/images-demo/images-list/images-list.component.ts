import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { sharedService } from 'src/app/sharedService/shared.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  images: {}[] = []


  constructor(private readonly sharedService: sharedService) { }

  ngOnInit(): void {
    this.sharedService.addListItem$.subscribe(
      response => {
        this.images.push(response)
      }
    )
  }

  onDeleteListItem(index: number) {
    this.images.splice(index, 1);
    this.sharedService.removeListItem.next(index);
  }





}
