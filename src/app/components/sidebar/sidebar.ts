import { Component } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-sidebar',
  imports: [ThemeToggle],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
