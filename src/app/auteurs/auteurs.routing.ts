import { Routes, RouterModule } from '@angular/router';

import { AuteursComponent } from './auteurs.component';
import { AuteursFormComponent } from './auteurs-form/auteurs-form.component';

const auteursRoutes: Routes = [
  { path: 'auteurs', component: AuteursComponent, pathMatch: 'full' },
  { path: 'auteurs/new', component: AuteursFormComponent },
  { path: 'auteurs/:id', component: AuteursFormComponent }
];

export const auteursRouting = RouterModule.forChild(auteursRoutes);
