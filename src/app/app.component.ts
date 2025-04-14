import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'naruto_verse';

  users$: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.users$ = this.getUsersFromBackend();
  }

  getUsersFromBackend(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
