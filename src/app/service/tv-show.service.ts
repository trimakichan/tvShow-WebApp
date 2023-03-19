import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

import { ICurrentTV } from 'app/icurrent-tv';
import { ITvShowData } from 'app/itv-show-data';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }

getMovieData(input: string) {
  return this.httpClient.get<ITvShowData>(`https://api.tvmaze.com/search/shows?q=${input}`)
  .pipe(map((data):ICurrentTV => {
    console.log
    return this.transformtoICurrentTV(data)}))
}

private transformtoICurrentTV(data: ITvShowData)
: ICurrentTV {
  return {
    title: data.name,
    // image: data.show.image.medium,
    description: data.summary
    // genre: data.show.genres,
    // rating: data.show.rating 
  }
}
}


