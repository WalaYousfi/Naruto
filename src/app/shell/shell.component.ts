import { Component } from '@angular/core';

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
  collections = [
    { name: 'none', rout: '/first' },
    { name: 'characters', rout: '/characters' },
    { name: 'clans', rout: '/clans' },
    { name: 'villages', rout: '/villages' },
  ];
}
