import { Component, ContentChild } from '@angular/core';
import { ICurrentTV } from './icurrent-tv';
import { TvShowService } from './service/tv-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvShow-WebApp';
  currentTV: ICurrentTV = { //this connects the tv componenet
    this.tvDataResult = {
      title: '',
      image: '',
      description: '',
      genres:[],
      rating: 0
    }
    constructor(private TvShowService: TvShowService) {}
    doSearch)searchValue: string){
      const userInput = SearchValue.split(',').map(s => s.trim());
      this.TvShowService.getcurrentTV(userInput[0]).subscribe  
        (data => this.currentTV = data)
    }
}
