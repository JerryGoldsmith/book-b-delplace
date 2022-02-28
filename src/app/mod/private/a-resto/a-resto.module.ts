import { NgModule } from '@angular/core';
import { ARestoRoutingModule } from './a-resto-routing.module';


@NgModule({
  declarations: [
    /* Part01RestoHomeComponent est déjà déclaré dans app.module
    à cause de formGroup */
  ],
  imports: [
    ARestoRoutingModule
  ],
  exports: []
})
export class ARestoModule { }
