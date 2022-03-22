import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionArchivesRoutingModule } from './edition-archives-routing.module';
import { ArchivesComponent } from 'src/app/edition/archives/archives.component';


@NgModule({
  declarations: [
    ArchivesComponent
  ],
  imports: [
    CommonModule,
    EditionArchivesRoutingModule
  ],
  exports: [
    ArchivesComponent
  ]
})
export class EditionArchivesModule { }
