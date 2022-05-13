import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueArrayPipe } from 'src/app/pipes/value-array.pipe';

@NgModule({
  declarations: [ValueArrayPipe],
  imports: [
    CommonModule
  ],
  exports:[
    ValueArrayPipe
  ]
})
export class ValueArrayPipeModule { }