import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatsStartRoutingModule } from './seats-start-routing.module';
import { SeatsStartComponent } from 'src/app/part01-reservation/seats/seats-start/seats-start.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

// import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

@NgModule({
  declarations: [
    SeatsStartComponent
    // ValueArrayPipe
  ],
  imports: [
    CommonModule,
    SeatsStartRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // ValueArrayPipeModule
  ],
  exports: [
    SeatsStartComponent
    // ValueArrayPipe
  ]
})
export class SeatsStartModule { }
