import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogProject';

  initPosts = [
    {
      title: 'Premier post',
      content: 'Ceci est le contenu du premier post.',
      loveIts: -5,
      date: new Date('25/01/1988')
    },
    {
      title: 'Second post',
      content: 'Je voulais un autre monde, ou la terre serait ronde.',
      loveIts: 3
    },
    {
      title: 'La fleur',
      content: 'La fleur dont je souhaite vous parler s\'éparpille dans le monde comme un torrent dans la terre. Bullshit' ,
      loveIts: 0
    }
  ];
}
