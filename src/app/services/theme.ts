import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private currentTheme: 'light' | 'dark' = 'dark';
  private monoEnabled = false;

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
  }

  toggleMono() {
    this.monoEnabled = !this.monoEnabled;

    if (this.monoEnabled) {
      document.body.setAttribute('data-mono', 'true');
    } else {
      document.body.removeAttribute('data-mono');
    }
  }

  getTheme() {
    return this.currentTheme;
  }

  isMonoEnabled() {
    return this.monoEnabled;
  }

}
