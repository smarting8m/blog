import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string = 'coucou';
  @Input() content: string = 'Ceci est un test';
  @Input() loveIts: number = 0;
  @Input() createdAt: Date;

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
