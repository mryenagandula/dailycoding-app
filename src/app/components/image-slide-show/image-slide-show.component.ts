import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slide-show',
  templateUrl: './image-slide-show.component.html',
  styleUrls: ['./image-slide-show.component.scss']
})
export class ImageSlideShowComponent implements OnInit {

  public images = [
    "https://github.com/SpringSrikanth/Letstalk-Assets/blob/main/src/assets/meeting5.jpg?raw=true",
    "https://github.com/SpringSrikanth/Letstalk-Assets/blob/main/src/assets/meeting2.jpg?raw=true",
    "https://github.com/SpringSrikanth/Letstalk-Assets/blob/main/src/assets/meeting1.jpg?raw=true",
    "https://github.com/SpringSrikanth/Letstalk-Assets/blob/main/src/assets/meeting6.jpg?raw=true"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
