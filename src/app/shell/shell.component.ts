import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface collection {
  name: string;
  route: string;
}
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css',
})
export class ShellComponent {
  imageSRC = 'assets/sharingan.png';
  collections = [
    {
      name: 'characters',
      route: '/characters',
      image: 'assets/main-characters.png',
    },
    { name: 'clans', route: '/clans', image: 'assets/akatsuki.png' },
    { name: 'villages', route: '/villages', image: 'assets/leaf-village.png' },
  ];

  isHandset$: Observable<boolean> = this.breakPointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private breakPointObserver: BreakpointObserver) {}

  changeImage() {
    if (this.imageSRC === 'assets/sharingan.png') {
      this.imageSRC = 'assets/mangekyu.png';
    } else {
      this.imageSRC = 'assets/sharingan.png';
    }
  }
}
