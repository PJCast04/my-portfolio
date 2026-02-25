import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Certifications } from './pages/certifications/certifications';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
{ path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience },
  { path: 'certifications', component: Certifications },
  { path: 'contact', component: Contact }
];
