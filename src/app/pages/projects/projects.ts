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
  },
  {
    id: 2,
    title: 'Board Exam Tracker',
    description: 'Board exam review companion with an AI quiz generator that turns uploaded PDF, Word, or PowerPoint reviewers into multiple-choice questions with explanations. Also tracks subjects, study sessions, and mock exam scores.',
    stack: ['React', 'Vite', 'LangChain', 'AI'],
    url: 'https://board-exam-tracker-rho.vercel.app/#/home'
  }

];

openProject(url: string) {
  window.open(url, '_blank');
}
}
