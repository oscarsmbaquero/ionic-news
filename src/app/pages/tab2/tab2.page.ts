import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Article } from './../../../interfaces/index';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public articles: Article[] =[];

  public categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];
  public selectedCategory: string = this.categories[2];
  constructor( private newsService: NewsService) {}

  ngOnInit() {
   this.newsService.getNewsByCategory(this.selectedCategory)
        .subscribe(articles => {
        this.articles = [...this.articles, ...articles];
   });
  }

  segmentChanged(event: any){
    this.selectedCategory = event.detail.value;
    this.newsService.getNewsByCategory(this.selectedCategory)
    .subscribe(articles => {
      this.articles = [...articles];
});

  }
}
