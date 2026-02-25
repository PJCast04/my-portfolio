import { Component } from '@angular/core';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
currentTheme: 'light' | 'dark' = 'dark';
  monoEnabled = false;

  constructor(private themeService: Theme) {}

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    this.themeService.setTheme(theme);
  }

  toggleMono() {
    this.monoEnabled = !this.monoEnabled;
    this.themeService.toggleMono();
  }
}
