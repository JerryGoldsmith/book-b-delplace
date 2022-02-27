import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RestosComponent } from 'src/app/restos/restos.component';
import { Part01RestoHomeComponent } from 'src/app/part01-resto-home/part01-resto-home.component';

import { MatrixService } from "../services/resto/matrix.service";
import { AService } from "../services/resto/a.service";
import { BService } from "../services/resto/b.service";
import { CService } from "../services/resto/c.service";
import { DService } from "../services/resto/d.service";
import { EService } from "../services/resto/e.service";
import { FService } from "../services/resto/f.service";
import { GService } from "../services/resto/g.service";
import { HService } from "../services/resto/h.service";
import { IService } from "../services/resto/i.service";
import { JService } from "../services/resto/j.service";
import { KService } from "../services/resto/k.service";
import { LService } from "../services/resto/l.service";

const routes: Routes = [
  // {
  //   path: 'resto-home',
  //   // canActivate: [AuthGuardService],
  //   loadChildren: () => import('src/app/mod/private/a-resto/a-resto.module')
  //     .then(mod => mod.ARestoModule)
  // },
  // { path: 'resto', component: RestosComponent },
  { path: 'resto-home', component: Part01RestoHomeComponent }
  // {
  //   path: 'resto',
  //   // canActivate: [AuthGuardService],
  //   loadChildren: () => import('src/app/mod/private/resto/resto.module')
  //     .then(mod => mod.RestoModule)
  // }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule
    ]
  })
  export class Part01RestoModule { }