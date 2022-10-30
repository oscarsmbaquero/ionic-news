import { NewsResponse, Article } from './../../interfaces';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const apiKey= environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

getNews(): Observable<Article[]>{
  return this.http.get<NewsResponse>
  (`https://newsapi.org/v2/everything?q=tesla&from=2022-09-30&sortBy=publishedAt&apiKey=${apiKey}`)
  .pipe(
    map( resp => resp.articles)
  );
}

}
