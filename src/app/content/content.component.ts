import { Component} from '@angular/core';
// import { Observable } from 'rxjs';
// import {map} from 'rxjs/operators'
import {TvShowService} from '../service/tv-show.service';
import {ICurrentTV} from '../icurrent-tv'



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  tvDataResult: ICurrentTV;

  constructor(private TvShowService: TvShowService) {
    this.tvDataResult = {
      title: '',
      image: '',
      description: '',
      genres:[],
      rating: 0
    }

    this.TvShowService.getMovieData('girl').subscribe(data => {
      this.tvDataResult = data
      console.log(this.tvDataResult)})
  }

}
