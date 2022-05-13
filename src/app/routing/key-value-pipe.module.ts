import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyValuePipe } from 'src/app/pipes/key-value.pipe';

@NgModule({
  declarations: [KeyValuePipe],
  imports: [
    CommonModule
  ],
  exports:[
    KeyValuePipe
  ]
})
export class KeyValuePipeModule { }