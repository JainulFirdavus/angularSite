import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { animate, state, style, transition, trigger } from '@angular/animations';





@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [NgbCarouselConfig],
  animations: [

  ]
})
export class BannerComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['../../assets/img/slider-1.jpg'];
  isDisabled = false;
  isOpen = false;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }


  ngOnInit(): void {


  }


}
