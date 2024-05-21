import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-rx-js-functions',
  templateUrl: './rx-js-functions.component.html',
  styleUrl: './rx-js-functions.component.css',
})
export class RxJSFunctionsComponent implements OnInit {
  users = [
    { id: '1', name: 'lola', isActive: true },
    { id: '2', name: 'lord', isActive: true },
    { id: '3', name: 'lsdv', isActive: true },
  ];

  // behaviorSubjet is just a stream
  // null by default
  user$ = new BehaviorSubject<{ id: string; name: string } | null>(null);

  users$ = of(this.users);
  // we convert plain data users into a stream with of
  // users$ is an Observable of an array with objects of propreties id , name , isActive

  //if users array is in another component
  //pipe helps organize our functions inside one by one
  username$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  // we filter every single user
  // filter return only true or false value (isActive)
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive)),
    map((users) => users.map((user) => user.name))
  );

  ngOnInit(): void {
    // after u fetch ur data from api u can update it
    setTimeout(() => {
      //after 2 sec the stream will update
      this.user$.next({ id: '1', name: 'john' });
    }, 2000);

    // with subscribe u get access to user$
    this.user$.subscribe((user) => {
      console.log('user : ', user);
    });

    // this.users$.subscribe((users) => {
    //   // write whatever code u can with stream
    //   console.log('users', users);
    // });
  }
}
