import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface collection {
  name: string;
  rout: string;
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
      rout: '/characters',
      image: 'assets/main-characters.png',
    },
    { name: 'clans', rout: '/clans', image: 'assets/akatsuki.png' },
    { name: 'villages', rout: '/villages', image: 'assets/leaf-village.png' },
  ];

  isHandset$: Observable<boolean> = this.breakPointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private breakPointObserver: BreakpointObserver) {}

  changeImage() {
    this.imageSRC = 'assets/mangekyu.png';
  }
}
