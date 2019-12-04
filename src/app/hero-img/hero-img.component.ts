import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImnageDetailService } from '../service/imnage-detail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroImgComponent implements OnInit, OnDestroy {

  selectedImage = [];
  imageContainer = [];
  selectedImg: string = '';
  selected = 'image_1.jpg';
  imageLoadingSubscription: Subscription
  constructor(private imagSvc: ImnageDetailService) { }

  ngOnInit() {
    this.loadImageInfo();
    this.selected = 'image_1.jpg';

  }

  loadImageInfo() {
    this.imageContainer = [];
    this.imageLoadingSubscription =  this.imagSvc.imageInfo().subscribe(rep => {
      this.imageContainer = rep;
      console.log('this.res', rep);
      this.selectedImage = (this.imageContainer[0]);

    }, error =>{
      console.log(error.message);
    })

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

  ngOnDestroy() {
    console.log('the image component is destroyed')
    this.imageLoadingSubscription.unsubscribe();
  }

}