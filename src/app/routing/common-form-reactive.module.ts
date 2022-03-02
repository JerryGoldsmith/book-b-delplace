import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { CommonModule, registerLocaleData } from "@angular/common";
// pipe for date
import * as fr from "@angular/common/locales/fr";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ]
  })
  export class CommonFormReactiveModule { 
    constructor() {
        registerLocaleData(fr.default);
      }
  }