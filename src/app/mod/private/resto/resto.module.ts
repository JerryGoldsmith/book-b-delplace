import { NgModule } from '@angular/core';

import { RestoRoutingModule } from './resto-routing.module';
import { RestosComponent } from 'src/app/restos/restos.component';

import { MatrixService } from "../../../services/resto/matrix.service";
import { AService } from "../../../services/resto/a.service";
import { BService } from "../../../services/resto/b.service";
import { CService } from "../../../services/resto/c.service";
import { DService } from "../../../services/resto/d.service";
import { EService } from "../../../services/resto/e.service";
import { FService } from "../../../services/resto/f.service";
import { GService } from "../../../services/resto/g.service";
import { HService } from "../../../services/resto/h.service";
import { IService } from "../../../services/resto/i.service";
import { JService } from "../../../services/resto/j.service";
import { KService } from "../../../services/resto/k.service";
import { LService } from "../../../services/resto/l.service";


@NgModule({
  declarations: [
    RestosComponent
  ],
  imports: [
    RestoRoutingModule
  ],
  exports: [
    RestosComponent
  ],
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
export class RestoModule {}
