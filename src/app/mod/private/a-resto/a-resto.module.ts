import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ARestoRoutingModule } from './a-resto-routing.module';
import { Part01RestoHomeComponent } from 'src/app/part01-resto-home/part01-resto-home.component';


@NgModule({
  declarations: [
    /* Part01RestoHomeComponent est déjà déclaré dans app.module
    à cause de formGroup */
  ],
  imports: [
    // CommonModule,
    ARestoRoutingModule
  ],
  exports: []
})
export class ARestoModule { }
