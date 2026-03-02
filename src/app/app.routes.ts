import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Certifications } from './pages/certifications/certifications';
import { Experience } from './pages/experience/experience';
import { Tech } from './pages/tech/tech';

export const routes: Routes = [
{ path: '', component: Home },
  { path: 'projects', component: Projects, data: { anim: 'projects' } },
  { path: 'experience', component: Experience , data: { anim: 'experience' }    },
  { path: 'certifications', component: Certifications, data: { anim: 'certifications' }  },
  { path: 'contact', component: Contact, data: { anim: 'contact' } },
  {path: 'tech', component: Tech, data: { anim: 'tech' } }
];
