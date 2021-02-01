import { Component, OnInit } from '@angular/core';
import { sharedService } from 'src/app/sharedService/shared.service';

@Component({
  selector: 'app-primary-image',
  templateUrl: './primary-image.component.html',
  styleUrls: ['./primary-image.component.scss']
})
export class PrimaryImageComponent implements OnInit {

  urls: string[] = []

  primaryImageUrl = ''
  primaryImageUrlActive = ''


  constructor(private readonly sharedService: sharedService) { }

  ngOnInit(): void {
    this.sharedService.addListItem$.subscribe(
      response => {
        this.urls.push(response.url)
      }
    )

    this.sharedService.updatePrimaryUrl$.subscribe(
      response => {
        this.primaryImageUrl = response;
        this.primaryImageUrlActive = this.primaryImageUrl;

      }
    )

    this.sharedService.removeListItem$.subscribe(
      response => {
        if (this.primaryImageUrlActive === this.urls[response]) {
          if (response == 0) {
            this.primaryImageUrlActive = this.urls[response + 1]
          }
          else {
            this.primaryImageUrlActive = this.urls[response - 1]
          }
        }
        this.urls.splice(response, 1)
      })

      this.sharedService.addListItem$.subscribe(
        response => {
          if(this.urls.length==1){
            this.primaryImageUrlActive=response.url
          }
        }
      )
  }

  onMouseEnter(url) {
    this.primaryImageUrlActive = url;
  }

  onMouseLeave() {
    this.primaryImageUrlActive = this.primaryImageUrl;
  }







}
