import { Component, Input } from '@angular/core';
// import { Observable } from 'rxjs';
// import {map} from 'rxjs/operators'
import { TvShowService } from '../service/tv-show.service';
import { ICurrentTV } from '../icurrent-tv';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
@Input() tvDataResult: ICurrentTV;

  constructor(private TvShowService: TvShowService) {
    this.tvDataResult = {
      title: '',
      image: '',
      description: '',
      genres: [],
      rating: 0,
    };

    this.TvShowService.getMovieData('pokemon').subscribe((data) => {
      this.tvDataResult = data;


    // ----This is for the description ------------
    const div = document.querySelector('#summary');
    const p = document.createElement("p");
    p.innerHTML = this.tvDataResult.description;
    div?.appendChild(p)
  
    // --------------------------------------------
      
      console.log(this.tvDataResult);
    
  }
  )}
}

// const descpriton = this.tvDataResult.description.replace(/<p>|<b>|/g, '')
