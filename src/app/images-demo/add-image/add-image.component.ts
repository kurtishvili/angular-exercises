import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { sharedService } from 'src/app/sharedService/shared.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  name: string = '1'
  url: string = 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'

  constructor(
    private readonly sharedService: sharedService,
    private readonly messageService : MessageService) { }

  ngOnInit(): void {
  }

  addImage() {
    if (!this.url) {
      this.messageService.add({severity: 'errror', detail:'add'})
      return;
    }
    this.sharedService.addListItem.next({ name: this.name, url: this.url })
  }

}
