import { Component } from '@angular/core';
import {TvShowService} from './service/tv-show.service'
import {ICurrentTV} from './icurrent-tv'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvShow-WebApp';
  searchResult: ICurrentTV = {
    title: '',
    image: '',
    description: '',
    genres: [],
    rating: 0,
  }


  constructor(private TvShowService: TvShowService){}

  doSearch(searchValue: string) {
    this.TvShowService.getMovieData(searchValue).subscribe(data => this.searchResult = data)
  }


}
