
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AuteursComponent } from './auteurs.component';
import { ServiceAuteurs} from './shared/auteurs.service';
import { AuteursFormComponent } from './auteurs-form/auteurs-form.component';
import { Ng2TableModule } from './../../../node_modules/ng2-table/ng2-table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    Ng2TableModule
  ],
  declarations: [
    AuteursComponent,
   AuteursFormComponent,
],
  exports: [
    AuteursComponent
  ],
  providers: [
    ServiceAuteurs
  ],
  
})
export class AuteursModule { }
