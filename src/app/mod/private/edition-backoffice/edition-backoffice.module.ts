import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionBackofficeRoutingModule } from './edition-backoffice-routing.module';

import { Part01BackofficeHomeComponent } from 'src/app/part01-backoffice-home/part01-backoffice-home.component';


@NgModule({
  declarations: [
    Part01BackofficeHomeComponent
  ],
  imports: [
    CommonModule,
    EditionBackofficeRoutingModule
  ],
  exports: [
    Part01BackofficeHomeComponent
  ]
})
export class EditionBackofficeModule { }
