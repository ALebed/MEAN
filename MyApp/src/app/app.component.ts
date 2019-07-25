import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Angular App';
  username: string;

  constructor() {
    if(localStorage.getItem('username') !== null) {
      this.username = localStorage.getItem('username');
    } else {
      this.username = "Default Username";
    }
  }
}
