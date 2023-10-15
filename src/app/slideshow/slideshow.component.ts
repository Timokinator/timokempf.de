import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']
  headlines = ['Bring engineering to the next level',
    'Code, Create, Innovate',
    'Debugging: Where heroes are made',
    'Coding dreams into reality',
    'Empowering the digital future'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  };

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 7000);
  };
}
