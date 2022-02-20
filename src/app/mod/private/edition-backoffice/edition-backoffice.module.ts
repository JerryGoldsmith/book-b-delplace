import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionBackofficeRoutingModule } from './edition-backoffice-routing.module';
import { BackofficeComponent } from 'src/app/book-list/backoffice/backoffice.component';


@NgModule({
  declarations: [
    BackofficeComponent
  ],
  imports: [
    CommonModule,
    EditionBackofficeRoutingModule
  ],
  exports: [
    BackofficeComponent
  ]
})
export class EditionBackofficeModule { }
