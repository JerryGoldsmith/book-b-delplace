import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
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
  {
    path: 'resto-home',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/a-resto/a-resto.module')
      .then(mod => mod.ARestoModule)
  },
  {
    path: 'resto',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('src/app/mod/private/resto/resto.module')
      .then(mod => mod.RestoModule)
  }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [],
    providers: [
      MatrixService,
      AService,
      BService,
      CService,
      DService,
      EService,
      FService,
      GService,
      HService,
      IService,
      JService,
      KService,
      LService
    ]
  })
  export class Part01RestoModule { }