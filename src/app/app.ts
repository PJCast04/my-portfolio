import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('450ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class App implements OnInit, OnDestroy {
  // ✅ signals so UI updates even in zoneless
  introHiding = signal(false);
  introGone = signal(false);

  routeAnimKey = signal('initial');

  private t1?: number;
  private t2?: number;

  constructor(private router: Router) {}

  ngOnInit() {
    document.body.style.overflow = 'hidden';

    // Safe route key (no RouterOutlet access)
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const key =
          this.router.routerState.snapshot.root.firstChild?.routeConfig?.path ??
          'root';
        this.routeAnimKey.set(key || 'root');
      });

    const INTRO_HOLD_MS = 2500;
    const INTRO_FADE_MS = 800; // must match CSS

    this.t1 = window.setTimeout(() => {
      this.introHiding.set(true);
    }, INTRO_HOLD_MS);

    this.t2 = window.setTimeout(() => {
      this.introGone.set(true);
      document.body.style.overflow = '';
    }, INTRO_HOLD_MS + INTRO_FADE_MS);
  }

  ngOnDestroy() {
    if (this.t1) clearTimeout(this.t1);
    if (this.t2) clearTimeout(this.t2);
  }
}