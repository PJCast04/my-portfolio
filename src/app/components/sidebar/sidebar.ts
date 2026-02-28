import { Component } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [ThemeToggle, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
