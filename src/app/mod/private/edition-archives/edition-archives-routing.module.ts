import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivesComponent } from 'src/app/edition/archives/archives.component';

const routes: Routes = [
  { path: '', component: ArchivesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionArchivesRoutingModule { }
