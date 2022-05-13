import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatsRoutingModule } from './seats-routing.module';
import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

// import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

@NgModule({
  declarations: [
    SeatsComponent
    // ValueArrayPipe
  ],
  imports: [
    CommonModule,
    SeatsRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // ValueArrayPipeModule
  ],
  exports: [
    SeatsComponent
    // ValueArrayPipe
  ]
})
export class SeatsModule { }
