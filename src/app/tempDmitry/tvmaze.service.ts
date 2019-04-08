import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FakeAnn} from './fake-ann';

@Injectable({
  providedIn: 'root'
})

export class TvmazeService {

// links for API calls
  showsQueryUrl = 'http://api.tvmaze.com/search/shows?q=';
  baseUrl = 'http://api.tvmaze.com/';

// HttpClient is passed into the constuctor to ensure api calls functionality
  constructor(private http: HttpClient) { }

// This function makes api call based on the user input and creates an array of objects of type Show
  getShowSearchResults(searchString: string): Observable<FakeAnn[]> {
    return this.http.get(this.showsQueryUrl + searchString).pipe(
      map(result => (result as any[]).map(item => new FakeAnn(item.show)))
    );
  }

// This function makes api call to get seasons.
  getSeasons(seasonId): Observable<any[]> {
    const url = this.baseUrl + 'shows/' + seasonId + '/seasons';
    return this.http.get<any[]>(url);
  }

// This function makes api call to get the episodes
  getEpisodes(seasonId): Observable<any> {
    const url = this.baseUrl + 'seasons/' + seasonId + '/episodes';
    return this.http.get<any[]>(url);
  }

// This function makes api call to get a JSON file that will be used later to create Episodes objects. (functionality not implemented)
  getJSONforEpCreation(passedUrl: string): Observable<any> {
    return this.http.get<[any]>(passedUrl);
  }
}
