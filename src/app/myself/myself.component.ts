import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myself',
  templateUrl: './myself.component.html',
  styleUrls: ['./myself.component.css'],
})
export class MyselfComponent implements OnInit {
  users$: Observable<any>;

  constructor(private httpClient: HttpClient) {
   this.users$ = this.getUsersFromBackend();
  }

  getUsersFromBackend(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  ngOnInit(): void {}
}
