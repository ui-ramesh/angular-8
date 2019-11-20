import { Component, OnInit } from '@angular/core';
import { ImnageDetailService } from '../service/imnage-detail.service';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroImgComponent implements OnInit {

  selectedImage = [];
  imageContainer = [];
  selectedImg: string = '';
  selected = 'image_1.jpg';
  constructor(private imagSvc: ImnageDetailService) { }

  ngOnInit() {
    this.loadImageInfo();
    this.selected = 'image_1.jpg';

  }

  loadImageInfo() {
    this.imageContainer = [];
    this.imagSvc.imageInfo().subscribe(rep => {
      this.imageContainer = rep;
      console.log('this.res', rep);
      this.selectedImage = (this.imageContainer[0]);

    });

  }
  getSelectedImg() {
    this.selectedImage = [];
    for (var i = 0; i < this.imageContainer.length; i++) {
      if (this.imageContainer[i].imageName === this.selected) {
        this.selectedImage = (this.imageContainer[i]);

      }
    }
    console.log('this.selectedImage', this.selectedImage);
  }


}