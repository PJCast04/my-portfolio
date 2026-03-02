import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type TechCategory = {
  title: string;
  items: string[];
};

@Component({
  selector: 'app-tech',
  imports: [NgFor],
  templateUrl: './tech.html',
  styleUrl: './tech.css',
})
export class Tech {
  categories: TechCategory[] = [
    {
      title: 'Frontend',
      items: [
        'Angular', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS',
        'SCSS', 'Styled Components', 'ESLint', 'Prettier',
      ],
    },
    {
      title: 'Backend',
      items: [
        'Python', 'Java', 'Spring Boot',  'MySQL', 
      ],
    },
    {
      title: 'DevOps & Cloud',
      items: [
        'Azure', 'GitHub',
      ],
    },
  ];
}
