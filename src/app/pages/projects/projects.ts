import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  url: string;
}

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

    projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Minimal editorial portfolio built with Angular featuring theme and mono toggle system.',
    stack: ['Angular', 'TypeScript', 'SCSS'],
    url: 'https://joashcastanos.vercel.app'
  }
  
];

openProject(url: string) {
  window.open(url, '_blank');
}
}
