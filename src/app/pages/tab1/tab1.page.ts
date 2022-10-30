import { Article } from './../../../interfaces/index';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public articles: Article[] =[];

  constructor( private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews()
    .subscribe( articles => this.articles.push(...articles));

  }
}
