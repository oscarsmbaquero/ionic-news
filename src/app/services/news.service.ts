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
  (`https://newsapi.org/v2/top-headlines?country=it&apiKey=${apiKey}`)
  .pipe(
    map( resp => resp.articles)
  );
}

getNewsByCategory( category: string): Observable<Article[]>{
  return this.http.get<NewsResponse>
  (`https://newsapi.org/v2/top-headlines?country=it&category=${category}&apiKey=${apiKey}`)
  .pipe(
    map( resp => resp.articles)
  );
}

}
