import { Component, OnInit, Input} from '@angular/core';
// import { Observable } from 'rxjs';
// import {map} from 'rxjs/operators'





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() current: tvDataResult: ICurrentTV;

  constructor() {
    this.tvDataResult = {
      title: '',
      image: '',
      description: '',
      genres:[],
      rating: 0
    }
  }
}
