import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users$: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.users$ = this.getUsersFromBackend();
  }

  getUsersFromBackend(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  ngOnInit(): void {}
}
