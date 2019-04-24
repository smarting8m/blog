import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  title: string = 'coucou';
  content: string = 'Ceci est un test';
  loveIts: number = 0;
  createdAt: Date;

  constructor() { }

  ngOnInit() {
  }


  onLike() {
    this.loveIts++;
    console.log(this.loveIts);
  }

  onDislike() {
    this.loveIts--;
    console.log(this.loveIts);
  }

}
