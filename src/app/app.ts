import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { Sidebar } from './components/sidebar/sidebar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Sidebar],
  template: `
    <app-navbar></app-navbar>

    <main [@fadeAnimation]>
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class App {
  protected readonly title = signal('joash-portfolio');
}
